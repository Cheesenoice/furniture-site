import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";

const Category = ({ filters, setFilters, categories, colors, priceRanges }) => {
  // Hàm xóa bộ lọc
  const removeFilter = (key) => {
    setFilters({ ...filters, [key]: "" });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <h2 className="text-2xl font-bold my-4">Tất cả sản phẩm</h2>

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
          {priceRanges.map((price) => (
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
    </div>
  );
};

export default Category;
