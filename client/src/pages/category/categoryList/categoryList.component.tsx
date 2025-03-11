import ProductCard from "../../../components/ui/productCard/productCard.component";
import { Product } from "../../../types/product.interface";
import styles from './categoryList.module.scss';

interface CategoryProps{
    products: Product[]
}

function CategoryList({products}: CategoryProps){
    return(
        <section className={styles.categorySection}>
            {products.map((element, index) => (
                <ProductCard
                key={index}
                product={element}
                />
            ))}
        </section>
    )
}

export default CategoryList;