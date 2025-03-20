import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../../components/product/Category";
import ProductList from "../../components/product/ProductList";
import CartIcon from "../../components/cart/CartIcon";
import Header from "../../components/layout/Header";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    color: "",
  });

  // Lấy danh sách category, color, và price ranges từ dữ liệu API
  const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];
  const colors = [...new Set(products.map((p) => p.color))];
  const priceRanges = ["Dưới 5 triệu", "5 - 10 triệu", "Trên 10 triệu"];

  // Gọi API từ Postman
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Thay URL này bằng URL từ Postman Mock Server
        const response = await axios.get(
          "https://<your-mock-id>.mock.pstmn.io/products"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Không thể tải dữ liệu sản phẩm. Vui lòng thử lại.");
        console.error("Lỗi API:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Lọc sản phẩm dựa trên filters
  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" ||
        filters.category === "Tất cả" ||
        product.category === filters.category) &&
      (filters.price === "" ||
        (filters.price === "Dưới 5 triệu" && product.price < 5000000) ||
        (filters.price === "5 - 10 triệu" &&
          product.price >= 5000000 &&
          product.price <= 10000000) ||
        (filters.price === "Trên 10 triệu" && product.price > 10000000)) &&
      (filters.color === "" || product.color === filters.color)
    );
  });

  return (
    <div>
      <Header /> {/* Thêm Header vào trang */}
      {/* Hiển thị icon giỏ hàng */}
      <div className="flex justify-end mb-4">
        <CartIcon />
      </div>
      {/* Hiển thị danh sách sản phẩm */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Danh sách sản phẩm
        </h1>
        {/* Hiển thị lỗi nếu có */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {/* Loading state */}
        {loading ? (
          <div className="text-center">Đang tải...</div>
        ) : (
          <>
            {/* Component Category để hiển thị bộ lọc */}
            <Category
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              colors={colors}
              priceRanges={priceRanges}
            />

            {/* Component ProductList để hiển thị danh sách sản phẩm */}
            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} />
            ) : (
              <p className="text-center">Không có sản phẩm nào phù hợp.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
