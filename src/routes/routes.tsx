import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home.component";
import Product from "../pages/product/product.component";

function AppRoutes(){
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  )
};
export default AppRoutes;
