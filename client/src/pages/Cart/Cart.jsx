import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity } = useCart();
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const filteredItems = cartItems
    .filter((item) =>
      filterCategory ? item.category === filterCategory : true
    )
    .filter((item) =>
      filterPrice ? item.price <= parseFloat(filterPrice) : true
    );

  const totalAmount = filteredItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>

      {/* Bộ lọc */}
      <div className="mb-4 flex gap-4">
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Tất cả danh mục</option>
          <option value="electronics">Điện tử</option>
          <option value="clothing">Quần áo</option>
        </select>
        <input
          type="number"
          placeholder="Giá tối đa"
          className="border p-2 rounded"
          onChange={(e) => setFilterPrice(e.target.value)}
        />
      </div>

      {/* Danh sách sản phẩm */}
      {filteredItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>Số lượng: {item.quantity}</p>
              <p>Giá: {item.price} VNĐ</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Giảm
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        ))
      )}

      {/* Tổng tiền */}
      <div className="mt-4">
        <p className="text-xl font-bold">Tổng: {totalAmount} VNĐ</p>
        <Link
          to="/checkout"
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block"
        >
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

export default Cart;
