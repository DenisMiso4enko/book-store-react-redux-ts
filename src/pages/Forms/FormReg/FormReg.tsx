import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/actionCreators/userActionCreators";
import { Link, Navigate } from "react-router-dom";
import "./FormReg.css";
import { IStore } from "../../../redux/types";

const FormReg = () => {
  const { user } = useSelector((state: IStore) => state.user);
  if (user) {
    return <Navigate to="/" />;
  }
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    // @ts-ignore
    mode: "onChange ",
  });

  const handleSignIn = async (values: any): Promise<void> => {
    dispatch(signUp(values));
    reset();
  };
  return (
    <>
      <h1 className="form-header">Sign up</h1>
      <form className="form-reg" onSubmit={handleSubmit(handleSignIn)}>
        <TextField
          id="outlined-username"
          type="text"
          label="UserName"
          variant="outlined"
          helperText={errors.username?.message}
          {...register("username", {
            required: "Поле обязательное к заполнению",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
          })}
          error={Boolean(errors.username?.message)}
        />
        <TextField
          id="outlined-email"
          type="email"
          label="Email"
          variant="outlined"
          helperText={errors.email?.message}
          {...register("email", { required: "Поле обязательное к заполнению" })}
          error={Boolean(errors.email?.message)}
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          variant="outlined"
          {...register("password", {
            required: "Поле обязательное к заполнению",
            minLength: {
              value: 8,
              message: "минимум 8 символов",
            },
          })}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
        />
        <Button variant="contained" type="submit">
          Registration
        </Button>
        <span>
          You have an account?
          <Link to="/sign_in">
            {" "}
            <Button color="primary" variant="text">
              Login
            </Button>
          </Link>
        </span>
      </form>
    </>
  );
};

export default FormReg;
