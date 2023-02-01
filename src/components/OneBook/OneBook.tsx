import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  loadOneBook,
  removeFromFavorite,
} from "../../redux/actionCreators/booksActionCreators";

import FullDetails from "../FullDetails/FullDetails";
import Tabs from "../Tabs/Tabs";
import OneBookLoader from "./OneBookLoader";
import { addToCart } from "../../redux/actionCreators/cartActionCreators";
import { IoHeartOutline } from "react-icons/io5";
import { IOneBook, IStore } from "../../redux/types";
import { Button, Rating } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./OneBook.css";
import CartActions from "../../utils/actions/CartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IOneBookProps {
  data: IOneBook;
  fav: string[];
}

const OneBook = ({ data, fav }: IOneBookProps) => {
  window.scrollTo(0, 0);
  const { items } = useSelector((state: IStore) => state.cart);
  const [value, setValue] = React.useState<number | null>(2);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    authors,
    desc,
    image,
    language,
    price,
    pages,
    publisher,
    rating,
    subtitle,
    title,
    year,
    isbn13,
  } = data;
  const isInclude = fav.includes(isbn13);

  const { id } = useParams();
  const item = items.find((elGR) => elGR.isbn13 === isbn13);

  useEffect(() => {
    dispatch(loadOneBook(id, setIsLoading));
  }, [id]);

  const handleToggleFavorite = (): void => {
    dispatch(isInclude ? removeFromFavorite(isbn13) : addToFavorite(isbn13));
  };
  const notify = () => {
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAddToCart = (): void => {
    const cartItem = {
      isbn13,
      title,
      price,
      image,
      count: 1,
    };
    notify();
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="one-book__page">
      {isLoading ? (
        <>
          <h1 className="title">{title}</h1>
          <div className="one-book">
            <div className="one-book__image">
              <img src={image} />
              <Button
                className="btn-icon"
                variant="text"
                size="large"
                onClick={handleToggleFavorite}
              >
                <IoHeartOutline
                  fontSize="20px"
                  color={isInclude ? "red" : "currentColor"}
                />
              </Button>
            </div>
            <div className="one-book__info">
              <FullDetails
                name={price}
                value={
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                }
              />
              <FullDetails name={"Author"} value={authors} />
              <FullDetails name={"Published"} value={publisher} />
              <FullDetails name={"Language"} value={language} />
              <Button variant="text" onClick={() => setShowMore(!showMore)}>
                More details
                {showMore ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </Button>
              <div
                className={`one-book__more-info ${
                  showMore ? "show" : "hidden"
                }`}
              >
                <FullDetails name={"Pages"} value={pages} />
                <FullDetails name={"Year"} value={year} />
                <FullDetails name={"Rating"} value={rating} />
              </div>
              {item ? (
                <div className="more">
                  <CartActions data={item} />
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>
          <Tabs />
          <ToastContainer />
        </>
      ) : (
        [...new Array(1)].map((_, i) => <OneBookLoader key={i} />)
      )}
    </div>
  );
};

export default OneBook;
