import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
// import About from "./pages/About";
import Contact from "./pages/Home/Contact";
import Policies from "./pages/Home/Policies";
import UserAccount from "./pages/Auth/UserAccount";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import Blog from "./pages/Home/Blog";
import Products from "./pages/Product/Products";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
