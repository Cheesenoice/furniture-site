const Hero = () => {
  return (
    <div
      className="relative h-[400px] bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://jysk.vn/Data/Sites/1/Banner/home-banner-wsm.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay để làm mờ ảnh, tạo độ tương phản cho text */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative text-center text-white px-4"> //
        <h2 className="text-3xl font-bold mb-4">
          Khám phá các sản phẩm mới nhất!
        </h2>
        <p className="mb-4 text-lg">
          Ưu đãi lên đến <span className="font-bold">30%</span> trong tuần này!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Xem ngay
        </button>
      </div>
    </div>
  );
};

export default Hero;
