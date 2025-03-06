import Brands from "./brands/brands.components";
import Category from "./category/category.component";
import Thumb from "./thumb/thumb.component";
import global from '../../assets/styles/globalStyles.module.css';
import ProductCard from "../../components/ui/productCard/productCard.component";

function Home(){
    return(
        <>
            <Thumb></Thumb>
            <Brands></Brands>
            <div className={global.container}>
                <ProductCard></ProductCard>
                <Category></Category>
            </div>
        </>
    )
}

export default Home;