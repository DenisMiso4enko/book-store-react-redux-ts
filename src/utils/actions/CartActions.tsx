import React from "react";
import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  decrement,
  deleteItemInCart,
  increment,
} from "../../redux/actionCreators/cartActionCreators";
import { useDispatch } from "react-redux";

const CartActions = ({ data }: any) => {
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(decrement(data.isbn13));
  };
  const handleIncrement = () => {
    dispatch(
      data.count <= 1 ? deleteItemInCart(data.isbn13) : increment(data.isbn13)
    );
  };
  return (
    <div className="cart-actions">
      <Button onClick={handleIncrement} variant="text">
        <RemoveIcon />
      </Button>
      <span>{data.count}</span>
      <Button onClick={handleDecrement} variant="text" color="error">
        <AddIcon />
      </Button>
    </div>
  );
};

export default CartActions;
