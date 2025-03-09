import products from "../data/data";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
