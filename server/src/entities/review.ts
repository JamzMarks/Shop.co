import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Product } from "./product";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: "productId" }) 
  productId: Product;  

  @Column()
  user: string;

  @Column()
  review: string;

  @Column({ type: "decimal", default: 0 })
  rating: number;

  @Column()
  date: Date
}
