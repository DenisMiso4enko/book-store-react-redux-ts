import BookList from "../../components/BookList/BookList";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { useEffect } from "react";
import { setSearchValue } from "../../redux/actionCreators/booksActionCreators";

const Home = () => {
  const { books, searchValue } = useSelector((state: IStore) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchValue(""));
  }, []);

  return (
    <div>
      <h1 className="title">NEW RELEASED BOOKS</h1>
      <BookList books={books} searchValue={searchValue} />
    </div>
  );
};

export default Home;
