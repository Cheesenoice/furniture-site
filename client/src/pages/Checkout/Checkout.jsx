import { useState } from "react";
import vietcombank from "/src/images/banks/vietcombank-icon.png";
import techcombank from "/src/images/banks/techcombank-icon.png";
import mbbank from "/src/images/banks/mbbank-icon.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const banks = [
    { name: "Vietcombank", icon: vietcombank },
    { name: "Techcombank", icon: techcombank },
    { name: "MB Bank", icon: mbbank },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Thanh toán</h1>

      {/* Chọn phương thức thanh toán */}
      <div className="mb-4">
        <label className="block mb-2">Chọn phương thức thanh toán:</label>
        <select
          className="border p-2 rounded w-full"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Chọn phương thức</option>
          <option value="internet-banking">Internet Banking</option>
          <option value="card">MasterCard/Visa</option>
          <option value="momo">Momo</option>
        </select>
      </div>

      {/* Form thanh toán */}
      {paymentMethod === "internet-banking" && (
        <div>
          <label className="block mb-2">Chọn ngân hàng:</label>
          <select className="border p-2 rounded w-full mb-4">
            {banks.map((bank) => (
              <option key={bank.name} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Số tài khoản"
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Số tiền"
            className="border p-2 rounded w-full mb-4"
          />
        </div>
      )}

      {paymentMethod === "card" && (
        <div>
          <input
            type="text"
            placeholder="Số thẻ"
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Ngày hết hạn (MM/YY)"
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Mã CVV"
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Tên chủ thẻ"
            className="border p-2 rounded w-full mb-4"
          />
        </div>
      )}

      {paymentMethod === "momo" && (
        <div>
          <input
            type="text"
            placeholder="Số điện thoại Momo"
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Số tiền"
            className="border p-2 rounded w-full mb-4"
          />
        </div>
      )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Xác nhận thanh toán
      </button>
    </div>
  );
};

export default Checkout;
