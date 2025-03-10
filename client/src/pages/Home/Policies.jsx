import { useState } from "react";
import Header from "../../components/layout/Header";
const policies = [
  {
    title: "Chính sách bảo mật",
    content:
      "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và không chia sẻ với bên thứ ba mà không có sự đồng ý.",
  },
  {
    title: "Chính sách hoàn tiền",
    content:
      "Khách hàng có thể yêu cầu hoàn tiền trong vòng 7 ngày nếu sản phẩm không đáp ứng yêu cầu.",
  },
  {
    title: "Điều khoản sử dụng",
    content:
      "Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản và điều kiện được liệt kê tại đây.",
  },
];

const Policies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Chính Sách & Điều Khoản
            </h2>
            <div className="space-y-4">
              {policies.map((policy, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 bg-blue-600 text-white font-medium focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {policy.title}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-gray-100 text-gray-700">
                      {policy.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
