import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore, IUser } from "../../redux/types";
import { Link, useLocation, useParams } from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";
import { setSearchValue } from "../../redux/actionCreators/booksActionCreators";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { setPage } from "../../redux/actionCreators/settingsActionCreators";

const Header = () => {
  const { user } = useSelector((state: IUser) => state.user);
  const searchValue = useSelector((state: IStore) => state.books.searchValue);
  const dispatch = useDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(e.target.value));
  };
  let location = useLocation();
  const handleSetDisabled = () => {
    return location.pathname !== "/" ? true : false;
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => dispatch(setPage(1))}>
        BOOKSTORE
      </Link>
      <div className="search-bar">
        <TextField
          id="outlined-search"
          variant="outlined"
          value={searchValue}
          fullWidth
          onChange={handleInputChange}
          disabled={handleSetDisabled()}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {user ? (
        <AccountMenu />
      ) : (
        <Link to="/sign_in">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
