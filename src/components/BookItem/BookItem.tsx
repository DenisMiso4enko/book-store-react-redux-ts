import React from "react";
import { IBooks } from "../../types/types";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./BookItem.css";

interface IBookVariant extends IBooks {
  variant: string;
}

const BookItem = ({
  image,
  isbn13,
  price,
  subtitle,
  title,
  url,
  variant,
}: IBookVariant) => {
  return (
    <div className={`book-item book-item--${variant}`}>
      <div className="book-image">
        <img src={image} />
      </div>
      <h2 className="book-title">
        <Link to={`/book/${isbn13}`}>{title}</Link>
      </h2>
      <p className="book-subtitle">{subtitle}</p>
      <div className="book-details">
        <span>{price}</span>
        <div className="book-rate">
          <Rating name="read-only" value={5} readOnly />
        </div>
      </div>
    </div>
  );
};

export default BookItem;
