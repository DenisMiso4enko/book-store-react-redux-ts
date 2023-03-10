import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
// import { useHistory, useLocation, useParams } from "react-router";
import OneBook from "../../components/OneBook/OneBook";
import Slider from "../../components/Slider/Slider";
import { useSelector } from "react-redux";
import { IStore } from "../../types/types";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Subscribe from "../../components/Subscribe/Subscribe";

const BookPage = () => {
  const { books, oneBook, favorites } = useSelector(
    (state: IStore) => state.books
  );
  const { user } = useSelector((state: IStore) => state.user);
  if (!user) {
    return <Navigate to="/sign_in" />;
  }

  return (
    <div className="">
      <Link to="/">
        <KeyboardBackspaceIcon />
      </Link>
      <OneBook data={oneBook} fav={favorites} />
      <Subscribe />
      <Slider books={books} />
    </div>
  );
};

export default BookPage;
