import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/layout/Header";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null); // Thêm state để xử lý lỗi

  // Hàm fetch dữ liệu từ API Postman Mock Server
  const fetchPosts = async () => {
    try {
      // Thay URL này bằng URL Mock Server của bạn từ Postman
      const response = await axios.get(
        "https://<your-mock-id>.mock.pstmn.io/posts"
      );
      // Đảm bảo dữ liệu từ API có các trường: id, title, category, content, image
      const formattedPosts = response.data.map((post) => ({
        id: post.id || post._id, // Điều chỉnh theo cấu trúc API
        title: post.title || "Tiêu đề không có",
        category: post.category || "Chưa phân loại",
        content: post.content || post.body || "Nội dung không có",
        image:
          post.image ||
          `https://via.placeholder.com/300x200?text=${post.title}`,
      }));
      setPosts(formattedPosts);
    } catch (err) {
      setError(
        "Không thể tải dữ liệu từ API. Vui lòng kiểm tra URL hoặc thử lại."
      );
      console.error("Lỗi API:", err);
    } finally {
      setLoading(false);
    }
  };

  // Lấy danh sách category duy nhất
  const categories = [...new Set(posts.map((post) => post.category))];

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Lọc bài viết theo category và tìm kiếm
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Thêm Header vào trang */}

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>

        {/* Bộ lọc category */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Tìm kiếm */}
          <input
            type="text"
            placeholder="Tìm kiếm theo tiêu đề..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
        </div>

        {/* Hiển thị lỗi nếu có */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Loading state */}
        {loading ? (
          <div className="text-center">Đang tải...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-2">
                      {post.content.substring(0, 100)}...
                    </p>
                    <p className="text-sm text-gray-500">
                      Category: {post.category}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Không có bài viết nào.</p>
            )}
          </div>
        )}

        {/* Phân trang (giả lập) */}
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Trang trước
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Trang sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
