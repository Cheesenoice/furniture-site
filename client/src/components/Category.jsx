import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";

const products = [
  {
    category: "Bàn làm việc",
    name: "Bàn làm việc gỗ sồi",
    price: 5500000,
    color: "Nâu",
    size: "Trung bình",
    image: "https://jysk.vn/Data/Sites/1/Product/9159/361909286_1.jpg",
  },
  {
    category: "Ghế Văn Phòng",
    name: "Ghế xoay công thái học",
    price: 3000000,
    color: "Đen",
    size: "Nhỏ",
    image: "https://jysk.vn/Data/Sites/1/Product/9159/361909286_1.jpg",
  },
  {
    category: "Giường ngủ",
    name: "Giường ngủ gỗ thông",
    price: 8000000,
    color: "Vàng nhạt",
    size: "Queen",
    image: "https://example.com/images/giuong-go-thong.jpg",
  },
  {
    category: "Tủ quần áo",
    name: "Tủ quần áo cánh lùa",
    price: 6500000,
    color: "Trắng",
    size: "Lớn",
    image: "https://example.com/images/tu-canh-lua.jpg",
  },
  {
    category: "Bàn ăn",
    name: "Bàn ăn mặt đá",
    price: 9000000,
    color: "Đen",
    size: "6 ghế",
    image: "https://example.com/images/ban-an-mat-da.jpg",
  },
  {
    category: "Ghế ăn",
    name: "Ghế ăn bọc da",
    price: 1500000,
    color: "Xám",
    size: "Tiêu chuẩn",
    image: "https://example.com/images/ghe-an-boc-da.jpg",
  },
  {
    category: "Kệ sách",
    name: "Kệ sách gỗ công nghiệp",
    price: 2500000,
    color: "Nâu đậm",
    size: "Trung bình",
    image: "https://example.com/images/ke-sach-go.jpg",
  },
  {
    category: "Đèn bàn",
    name: "Đèn bàn LED cảm ứng",
    price: 800000,
    color: "Bạc",
    size: "Nhỏ",
    image: "https://example.com/images/den-ban-led.jpg",
  },
  {
    category: "Thảm trải sàn",
    name: "Thảm lông xù",
    price: 1800000,
    color: "Kem",
    size: "Lớn",
    image: "https://example.com/images/tham-long-xu.jpg",
  },
  {
    category: "Gương treo tường",
    name: "Gương viền gỗ",
    price: 1200000,
    color: "Gỗ tự nhiên",
    size: "Trung bình",
    image: "https://example.com/images/guong-treo-tuong.jpg",
  },
  {
    category: "Rèm cửa",
    name: "Rèm vải voan",
    price: 900000,
    color: "Trắng",
    size: "Tiêu chuẩn",
    image: "https://example.com/images/rem-vai-voan.jpg",
  },
  {
    category: "Cây cảnh",
    name: "Cây lưỡi hổ",
    price: 350000,
    color: "Xanh lá",
    size: "Nhỏ",
    image: "https://example.com/images/cay-luoi-ho.jpg",
  },
  {
    category: "Đồ trang trí",
    name: "Bộ bình hoa gốm sứ",
    price: 600000,
    color: "Nhiều màu",
    size: "Trung bình",
    image: "https://example.com/images/binh-hoa-gom.jpg",
  },
];

const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];
const prices = ["Dưới 5 triệu", "5 - 10 triệu", "Trên 10 triệu"];
const colors = ["Trắng", "Đen", "Nâu"];
const sizes = ["Nhỏ", "Trung bình", "Lớn"];

const ProductList = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    color: "",
    size: "",
  });

  // Xử lý lọc sản phẩm
  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      (filters.price === "" ||
        (filters.price === "Dưới 5 triệu" && product.price < 5000000) ||
        (filters.price === "5 - 10 triệu" &&
          product.price >= 5000000 &&
          product.price <= 10000000) ||
        (filters.price === "Trên 10 triệu" && product.price > 10000000)) &&
      (filters.color === "" || product.color === filters.color) &&
      (filters.size === "" || product.size === filters.size)
    );
  });

  // Hàm xóa bộ lọc
  const removeFilter = (key) => {
    setFilters({ ...filters, [key]: "" });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <h2 className="text-2xl font-bold my-4">Tất cả sản phẩm </h2>

      {/* Bộ lọc */}
      <div className="flex items-center gap-4 mb-6">
        {/* Icon bộ lọc */}
        <div className="flex items-center gap-2 text-gray-700">
          <Filter size={20} />
          <span>BỘ LỌC</span>
        </div>

        {/* Dropdown Danh mục */}
        <select
          className="border px-4 py-2 rounded-md text-gray-700"
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          value={filters.category}
        >
          <option value="">DANH MỤC</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Dropdown Giá */}
        <select
          className="border px-4 py-2 rounded-md text-gray-700"
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          value={filters.price}
        >
          <option value="">GIÁ SẢN PHẨM</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>

        {/* Dropdown Màu sắc */}
        <select
          className="border px-4 py-2 rounded-md text-gray-700"
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          value={filters.color}
        >
          <option value="">MÀU SẮC</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        {/* Dropdown Kích thước */}
        <select
          className="border px-4 py-2 rounded-md text-gray-700"
          onChange={(e) => setFilters({ ...filters, size: e.target.value })}
          value={filters.size}
        >
          <option value="">KÍCH THƯỚC</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Hiển thị bộ lọc đã chọn */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(filters).map(
          ([key, value]) =>
            value && (
              <div
                key={key}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <span>
                  {key.toUpperCase()}: {value}
                </span>
                <X
                  size={16}
                  className="cursor-pointer"
                  onClick={() => removeFilter(key)}
                />
              </div>
            )
        )}
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">
                {product.color} - {product.size}
              </p>
              <p className="text-blue-600 font-bold mt-2">
                {product.price.toLocaleString()}₫
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
