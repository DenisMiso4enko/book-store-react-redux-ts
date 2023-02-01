import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activation } from "../../redux/actionCreators/userActionCreators";

const ActivatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const splitInfo = window.location.pathname.split("/");
    dispatch(activation({ uid: splitInfo[2], token: splitInfo[3] }, navigate));
  }, []);
  return (
    <div>
      <h1>Account activation in progress</h1>
    </div>
  );
};

export default ActivatePage;
