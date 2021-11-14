import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
//import "swiper/css/navigation.scss";
import "swiper/swiper-bundle.min.css";
import InstaStories from "../instaStories/instaStories";
// swiper core styles
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Popupslider.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation]);
export default function App() {
  const [swiper, setSwiper] = useState(null);
  return (
    <>
      <Swiper navigation={true} spaceBetween={100} className="mySwiper" 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      onSwiper={setSwiper}
      onSlideChange={(e) => console.log(e)}
      onReachEnd={() => {/*...*/}}
      allowSlidePrev={true}
      >
        <SwiperSlide>
          <InstaStories />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
