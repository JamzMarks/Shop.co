import 'reflect-metadata';
import express, { Request, Response } from "express";
import { DataSource } from 'typeorm';
import { Product } from "./entities/product";
import { Review } from "./entities/review";

const app = express();
app.use(express.json());

const dataSource = new DataSource({
    type: "sqlite",   
    database: "database.db",  
    entities: [Product, Review],  
    synchronize: true,         
    logging: false,           
  });
  
  async function initializeDatabase() {
    try {
      await dataSource.initialize();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Erro ao conectar com o banco de dados:", error);
    } 
} 
app.post('/product', asyncHandler(async (req, res) => {
    const { title, price, image, rating, description, color, size, category, dress, discount } = req.body;
    try {

        const product = new Product();
            product.title = title; 
            product.price = price;
            product.image = image;
            product.rating = rating;
            product.description = description;
            product.color = color;
            product.size = size;
            product.category = category;
            product.dress = dress;
            if (discount) {
                product.discount = discount;
            }

        await dataSource.getRepository(Product).save(product);
        return res.status(201).json(product);

    } catch (error) {
        console.error("Erro ao adicionar product:", error);
        return res.status(500).json({ message: "Erro ao adicionar product." });
    }
}));

app.post('/reviews', asyncHandler(async (req, res) => {
    const { productId, user, review, rating, date } = req.body;
    try {
        const product = await dataSource.getRepository(Product).findOneBy({ id: productId });

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }
        const newReview = new Review();
        newReview.productId = product; 
        newReview.user = user;
        newReview.review = review;
        newReview.rating = rating;
        newReview.date = date;

        await dataSource.getRepository(Review).save(newReview);
        return res.status(201).json(newReview);

    } catch (error) {
        console.error("Erro ao adicionar review:", error);
        return res.status(500).json({ message: "Erro ao adicionar review." });
    }
}));

initializeDatabase().then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  });

function asyncHandler(arg0: (req: any, res: any) => Promise<any>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}
