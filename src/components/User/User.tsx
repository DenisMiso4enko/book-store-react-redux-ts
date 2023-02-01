import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../redux/types";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actionCreators/userActionCreators";

const User = () => {
  const { user } = useSelector((state: IUser) => state.user);
  return (
    <div>
      <div className="user-info">
        <div className="user-avatar">00000</div>
        <div className="user-name">{user && <h2>{user.username}</h2>}</div>
      </div>
    </div>
  );
};

export default User;
