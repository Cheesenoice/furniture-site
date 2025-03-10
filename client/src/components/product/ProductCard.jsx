const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-red-500 font-bold">
          {product.discountPrice.toLocaleString()}đ
        </span>
        <span className="line-through text-gray-400">
          {product.price.toLocaleString()}đ
        </span>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductCard;
