import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ProductListingPage from "@/pages/ProductListingPage";
import ProductViewPage from "@/pages/ProductViewPage";
import Register from "@/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/products" element={<ProductListingPage/>}/>
                    <Route path="/products/:id" element={<ProductViewPage/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;