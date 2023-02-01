import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Success = () => {
  return (
    <div>
      <h1>Success</h1>
      <p>Выполните вход</p>
      <Link to="/sign_in">
        <Button variant="contained">Перейти </Button>
      </Link>
    </div>
  );
};

export default Success;
