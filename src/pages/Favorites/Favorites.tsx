import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IBooks, IStore, IUser } from "../../redux/types";
import BookItem from "../../components/BookItem/BookItem";
import "./Favorites.css";
import { Navigate } from "react-router-dom";

const Favorites = () => {
  const [data, setData] = useState([] as IBooks[]);
  const { user } = useSelector((state: IUser) => state.user);
  const { books, favorites } = useSelector((state: IStore) => state.books);
  useEffect(() => {
    const resultData = [] as IBooks[];
    books.forEach((book) => {
      if (favorites.includes(book.isbn13)) {
        resultData.push(book);
      }
    });
    setData(resultData);
  }, [favorites]);

  if (!user) {
    return <Navigate to="/sign_in" />;
  }
  return (
    <div>
      <h1>Favorites Books {favorites.length}</h1>
      <div className="favorites-books">
        {data.map((item) => (
          <BookItem key={item.isbn13} {...item} variant="lg" />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
