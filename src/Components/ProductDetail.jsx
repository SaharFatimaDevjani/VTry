// pages/ProductPage.jsx

import React from "react";
import Breadcrumb from "./pages/BreadcrumbNavigation";
import ProductImages from "./pages/ProductImageThumbnails";
import ProductInfo from "./pages/ProductInfo";
import CustomerReviews from "./pages/CustomerReviews";
import Pagination from "./pages/Pagination";
import ProductTabs from "./pages/ProductTabs";


const ProductPage = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Breadcrumb />
        <div className="flex flex-col md:flex-row gap-6 px-20 p-6">
            <ProductImages />
            <ProductInfo />
        </div>
        <ProductTabs />
        <CustomerReviews />
        <Pagination />
    </div>
  );
  
};

export default ProductPage;
