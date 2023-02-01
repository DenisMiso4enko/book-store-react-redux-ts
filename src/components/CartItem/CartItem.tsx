import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  deleteItemInCart,
  increment,
} from "../../redux/actionCreators/cartActionCreators";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import "./CartItem.css";

interface ICartItemProps {
  price: number;
  title: string;
  image: string;
  isbn13: string;
  count: number;
}

const CartItem = ({ price, title, image, isbn13, count }: ICartItemProps) => {
  const dispatch = useDispatch();
  const handleDeleteInCart = (): void => {
    dispatch(deleteItemInCart(isbn13));
  };
  const handleDecrement = () => {
    dispatch(decrement(isbn13));
  };
  const handleIncrement = () => {
    // dispatch(increment(isbn13));
    dispatch(count <= 1 ? deleteItemInCart(isbn13) : increment(isbn13));
  };
  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={image} />
      </div>
      <div className="cart-info">
        <h1>{title}</h1>
        <div className="cart-actions">
          <Button onClick={handleIncrement} variant="text">
            <RemoveIcon />
          </Button>
          <span>{count}</span>
          <Button onClick={handleDecrement} variant="text" color="error">
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="cart-btn">
        <span>{price}</span>

        <IconButton
          onClick={handleDeleteInCart}
          aria-label="delete"
          size="large"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
