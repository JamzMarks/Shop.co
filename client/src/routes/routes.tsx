import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home.component";
import Product from "../pages/product/product.component";
import Cart from "../pages/cart/cart.component";
import NotFound from "../pages/notFound/notFound.component";

function AppRoutes(){
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/404" element={<NotFound/>} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  )
};
export default AppRoutes;
