// components/BackgroundSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../constants/data";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";

const BackgroundSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="absolute top-0 left-0 w-full h-full"
    >
      {sliderData.map(({ id, bg }) => (
        <SwiperSlide key={id} className="w-full h-full relative">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={bg}
            alt="background"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BackgroundSlider;
