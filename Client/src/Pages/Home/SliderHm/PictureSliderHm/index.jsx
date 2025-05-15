import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import slider1 from "../../../../assets/slider1.jpg";
import slider2 from "../../../../assets/slider2.jpg";
import slider3 from "../../../../assets/slider3.jpg";
import slider4 from "../../../../assets/slider4.jpg";

import { useLanguage } from "../../../../Utils/LanguageContext";

export default function PictureSliderHm() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = {
    fa: [
      {
        img: slider1,
        text: "با لپ‌تاپ‌های نسل جدید، سریع‌تر از همیشه باش!",
      },
      {
        img: slider2,
        text: "جدیدترین گوشی‌های هوشمند را همین حالا کشف کن!",
      },
      {
        img: slider3,
        text: "لحظات خاص را با دوربین‌های حرفه‌ای ثبت کن.",
      },
      {
        img: slider4,
        text: "با مدرن‌ترین لوازم، سبک زندگی‌ات را ارتقا بده!",
      },
    ],
    en: [
      {
        img: slider1,
        text: "Be faster than ever with the new generation of laptops!",
      },
      {
        img: slider2,
        text: "Discover the latest smartphones right now!",
      },
      {
        img: slider3,
        text: "Capture special moments with professional cameras.",
      },
      {
        img: slider4,
        text: "Upgrade your lifestyle with the most modern gadgets!",
      },
    ],
  };

  return (
    <Swiper
      navigation
      pagination
      keyboard
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides[language].map((item, index) => (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <img
            src={item.img}
            alt={`slider ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {index === activeIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: language === "fa" ? -80 : 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "35%",
                left: language === "fa" ? "2.5%" : "unset",
                right: language === "en" ? "2.5%" : "unset",
                background: "rgba(0, 0, 0, 0.6)",
                padding: "15px 30px",
                borderRadius: "16px",
                color: "#fff",
                fontSize: "1.8rem",
                fontWeight: 700,
                lineHeight: 1.5,
                maxWidth: "80%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                textShadow: "1px 1px 4px #000",
                textAlign: language === "fa" ? "right" : "left",
                direction: language === "fa" ? "rtl" : "ltr",
              }}
            >
              {item.text}
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
