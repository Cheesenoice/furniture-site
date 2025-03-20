import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const isNotActive = product.status === "not active";

  return (
    <div
      className={`relative border rounded-lg shadow-md p-4 transition-all ${
        isNotActive ? "opacity-50" : "hover:shadow-lg"
      }`}
    >
      {/* Hiển thị "Hết Hàng" nếu status là "not active" */}
      {isNotActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
          <span className="text-red-500 font-bold text-lg">Hết Hàng</span>
        </div>
      )}

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-gray-500">{product.description.substring(0, 50)}...</p>
      <p className="text-gray-500">Màu: {product.color}</p>
      <p className="text-gray-500">Số lượng: {product.stock}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-red-500 font-bold">
          {product.discountPrice.toLocaleString()}đ
        </span>
        <span className="line-through text-gray-400">
          {product.price.toLocaleString()}đ
        </span>
      </div>
      <button
        className={`mt-4 w-full py-2 rounded-lg text-white ${
          isNotActive
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
        onClick={() => addToCart(product)}
        disabled={isNotActive}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
