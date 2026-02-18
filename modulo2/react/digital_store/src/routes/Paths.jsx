import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListing from "../pages/ProductListingPage";
import ProductView from "../pages/ProductViewPage"
import HomePage from "../pages/HomePage"
import Page404 from "../pages/Page404";
import { useContext, useState } from "react";
import ProductListingPage from "../pages/ProductListingPage";
import Layout from "../components/Layout";
const  Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductListingPage/>}/>
                    <Route path="products" element={<ProductListingPage/>}/>
                    <Route path="products" element={<ProductListingPage/>}/>
                </Route>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
     );
}
export default Paths;