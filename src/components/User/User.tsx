import React, { FC } from "react";
import { IUserProps } from "../../types/types";
import "./User.css";
import avatar from "../../assets/avatar.png";

const User: FC<IUserProps> = ({ user }) => {
  return (
    <div>
      <div className="user-info">
        <div className="user-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="user-name">
          <h2>{user?.username}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
