import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
import ProductList from "../../components/product/ProductList";
import Footer from "../../components/layout/Footer";
import Category from "../../components/Category";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductList />
      <Footer />
      <Category />
    </div>
  );
}

export default Home;
