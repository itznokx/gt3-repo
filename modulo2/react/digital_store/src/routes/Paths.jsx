import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListing from "../pages/ProductListingPage";
import ProductView from "../pages/ProductViewPage"
import HomePage from "../pages/HomePage"
import Page404 from "../pages/Page404";
import { useContext, useState } from "react";
import ProductListingPage from "../pages/ProductListingPage";
const  Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="*" element={<Page404/>}/>
                <Route path="/products" element{<ProductListingPage/>}/>
                <Route path="products" element{<ProductListingPage/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;