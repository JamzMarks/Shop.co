import Brands from "./brands/brands.components";
import Category from "./category/category.component";
import Thumb from "./thumb/thumb.component";
import global from '../../assets/styles/globalStyles.module.css';
import styles from './home.module.scss';
import ProductList from '../../components/layout/productList/productList.component';
function Home(){
    return(
        <>
            <Thumb></Thumb>
            <Brands></Brands>
            <div className={`${global.container} ${styles.content}`}>
                <ProductList
                    title="New Arrivals"
                    max={8}
                />
                <ProductList
                    title="Top selling"
                    max={8}
                />
                <Category></Category>
            </div>
        </>
    )
}   

export default Home;