import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { IBooks, IStore } from "../../types/types";
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
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
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
