import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IBooks, IStore } from "../../redux/types";
import BookItem from "../../components/BookItem/BookItem";
import "./Favorites.css";

const Favorites = () => {
  const [data, setData] = useState([] as IBooks[]);
  const { books } = useSelector((state: IStore) => state.books);
  const { favorites } = useSelector((state: IStore) => state.books);
  useEffect(() => {
    const resultData = [] as IBooks[];
    books.forEach((book) => {
      if (favorites.includes(book.isbn13)) {
        resultData.push(book);
      }
    });
    setData(resultData);
  }, [favorites]);
  return (
    <div>
      <h1>Favorites Books</h1>
      <div className="favorites-books">
        {data.map((item) => (
          <BookItem key={item.isbn13} {...item} variant="lg" />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
