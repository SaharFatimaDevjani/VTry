import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "NEW ARRIVALS",
    description: "Upgrade Your Cart with Fresh Finds!",
    image: "https://via.placeholder.com/150x150.png?text=Product+1",
    button: "Shop Now",
    tag: "NEW",
    bgColor: "bg-red-600",
  },
  {
    title: "TRENDING NOW",
    description: "Catch the Latest Deals Before They're Gone!",
    image: "https://via.placeholder.com/150x150.png?text=Product+2",
    button: "Shop Now",
    tag: "HOT",
    bgColor: "bg-purple-600",
  },
  {
    title: "LIMITED TIME",
    description: "Don't Miss Out on Our Flash Offers!",
    image: "https://via.placeholder.com/150x150.png?text=Product+3",
    button: "Shop Now",
    tag: "SALE",
    bgColor: "bg-orange-600",
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="space-y-4">
      {/* Top Section: Main Banner */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left - Slider */}
        <div className="w-full md:w-2/3">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className={`p-6 ${slide.bgColor} text-white h-full`}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full mb-2 inline-block">
                      {slide.tag}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                    <p className="mb-4">{slide.description}</p>
                    <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200">
                      {slide.button}
                    </button>
                  </div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-40 h-40 object-contain mt-4 md:mt-0"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right - App Info */}
        <div className="w-full md:w-1/3 p-4 bg-gray-100 text-center flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">TRY SALE IT NOW APP</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://saleitnow.com&size=100x100"
            alt="QR Code"
            className="mb-2"
          />
          <p className="text-sm mb-1">Free Shipping</p>
          <p className="text-sm mb-1">Exclusive Vouchers</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-black text-white px-3 py-1 rounded">App Store</button>
            <button className="bg-black text-white px-3 py-1 rounded">Google Play</button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Flash Sale Banner */}
      <div className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/80x80.png?text=Flash+Sale"
            alt="Flash Sale"
            className="rounded-full border-2 border-white"
          />
          <div>
            <h3 className="text-xl font-bold">MID MONTH SALE <span className="bg-yellow-300 text-blue-800 px-2 py-1 ml-2 rounded">15-18 APRIL</span></h3>
            <p className="text-sm">TOP DEAL UP TO 60% OFF</p>
          </div>
        </div>
        <button className="bg-yellow-400 text-black px-6 py-2 font-semibold rounded shadow hover:bg-yellow-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
