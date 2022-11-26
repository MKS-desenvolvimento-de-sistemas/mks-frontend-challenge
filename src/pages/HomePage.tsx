import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Cart />
      <ProductsSection />
    </div>
  );
}
