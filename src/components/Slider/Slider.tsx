import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { IBooks, IStore } from "../../redux/types";
import BookItem from "../BookItem/BookItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

interface SliderProps {
  books: IBooks[];
}

const Slider = ({ books }: SliderProps) => {
  return (
    <>
      <h1 className="slider-title">SIMILAR BOOKS</h1>
      <Swiper
        className="slider"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            width: 320,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {books.map((book, index) => {
          return (
            <SwiperSlide key={index}>
              <BookItem key={book.isbn13} {...book} variant="sm" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
