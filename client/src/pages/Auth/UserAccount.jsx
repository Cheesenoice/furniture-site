import { useState } from "react";
import Header from "../../components/layout/Header";
const UserAccount = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
  });

  const toggleForm = () => setIsLogin(!isLogin);
  const showProfile = () => setIsProfile(true);
  const logout = () => {
    setIsProfile(false);
    setIsLogin(true);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          {!isProfile ? (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                {isLogin ? "Đăng nhập" : "Đăng ký"}
              </h2>
              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  onClick={showProfile}
                >
                  {isLogin ? "Đăng nhập" : "Đăng ký"}
                </button>
              </form>
              <p className="text-center text-gray-600 mt-4">
                {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
                <button
                  className="text-blue-500 ml-1 hover:underline"
                  onClick={toggleForm}
                >
                  {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Hồ sơ cá nhân
              </h2>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="text-gray-700 font-medium">Họ và tên:</p>
                  <p>{user.name}</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-gray-700 font-medium">Email:</p>
                  <p>{user.email}</p>
                </div>
                <button
                  className="w-full py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                  onClick={logout}
                >
                  Đăng xuất
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
