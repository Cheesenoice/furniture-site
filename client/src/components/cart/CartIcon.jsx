import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CartIcon = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // State để điều khiển animation
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Theo dõi sự kiện cuộn
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Kích hoạt animation khi cuộn
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500); // Animation kéo dài 500ms
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnimating]);
  return (
    <Link to="/cart" className="relative">
      <div
        className={`fixed bottom-4 right-4 transition-transform duration-500 ${
          isAnimating ? "animate-shake" : ""
        }`}
      >
        <FaShoppingCart className="text-2xl text-gray-800" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
