import Brands from "./brands/brands.components";
import Category from "./category/category.component";
import Thumb from "./thumb/thumb.component";
import global from '../../assets/styles/globalStyles.module.css';
import ProductList from '../../components/layout/productList/productList.component';
function Home(){
    return(
        <>
            <Thumb></Thumb>
            <Brands></Brands>
            <div className={global.container}>
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