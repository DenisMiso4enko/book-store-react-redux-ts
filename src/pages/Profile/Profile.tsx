import React from "react";
import User from "../../components/User/User";
import { useSelector } from "react-redux";
import { IUser } from "../../types/types";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state: IUser) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <User user={user} />
    </div>
  );
};

export default Profile;
