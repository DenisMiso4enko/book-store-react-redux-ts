import React from "react";
import { IStore, IUser } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../redux/actionCreators/cartActionCreators";
import "./Cart.css";
import { Button } from "@mui/material";
import { getTotal } from "../../utils/getTotal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Cart = () => {
  const { user } = useSelector((state: IUser) => state.user);
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/sign_in" />;
  }
  const { items } = useSelector((state: IStore) => state.cart);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart">
        <div onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
          <KeyboardBackspaceIcon />
        </div>
        <h1 className="title">Shopping Cart</h1>
        {items.length === 0 && <span>Empty</span>}
        {items.map((item) => (
          // @ts-ignore
          <CartItem key={item.isbn13} {...item} />
        ))}
      </div>
      <div className="cart-footer">
        <h3>Total: ${getTotal(items)}</h3>
        <Button
          onClick={handleClearCart}
          variant="contained"
          color="error"
          disabled={items.length === 0}
        >
          Clear cart
        </Button>
      </div>
    </>
  );
};

export default Cart;
