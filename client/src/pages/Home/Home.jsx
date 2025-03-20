import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
// import ProductList from "../../components/product/ProductList";
import Footer from "../../components/layout/Footer";
// import Category from "../../components/product/Category";
import CartIcon from "../../components/cart/CartIcon";
// import Blog from "./Blog";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductList /> */}

      {/* <div className="flex justify-end mb-4">
        <CartIcon />
      </div> */}
      <Footer />
      {/* <Category /> */}
    </div>
  );
}

export default Home;
