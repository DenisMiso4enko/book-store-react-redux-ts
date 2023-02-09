import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBookListProps, IStore } from "../../types/types";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";
import {
  loadBooks,
  searchBooks,
} from "../../redux/actionCreators/booksActionCreators";
import { CardSkeleton } from "../BookItem/Sceleton";
import Pagination from "../Pagination/PaginationEl";
import { paginate } from "../../utils/paginate";
import { setPage } from "../../redux/actionCreators/settingsActionCreators";
import Subscribe from "../Subscribe/Subscribe";

const BookList = ({ books, searchValue }: IBookListProps) => {
  window.scrollTo(0, 0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const booksCount = books.length;
  const { page } = useSelector((state: IStore) => state.settings);
  const pageSize = 6;
  const pageCount = Math.ceil(booksCount / pageSize);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };
  const booksSlice = paginate(books, page, pageSize);

  useEffect(() => {
    if (searchValue === "") {
      dispatch(loadBooks(setIsLoading));
    } else {
      dispatch(searchBooks(searchValue, setIsLoading));
    }
    dispatch(setPage(1));
  }, [searchValue]);

  if (!books.length) {
    return <h2>Книга не найдена</h2>;
  }

  return (
    <>
      <div className="book-list">
        {!isLoading
          ? [...new Array(12)].map((_, i) => <CardSkeleton key={i} />)
          : booksSlice.map((book) => (
              <BookItem key={book.isbn13} {...book} variant="lx" />
            ))}
      </div>
      <Pagination
        pageCount={pageCount}
        page={page}
        handleChange={handleChange}
      />
      <Subscribe />
    </>
  );
};

export default BookList;
