import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../../../redux/actionCreators/userActionCreators";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./FormAuth.css";
import { IStore } from "../../../redux/types";
import React from "react";
import { toast } from "react-toastify";

const FormAuth = () => {
  const { user } = useSelector((state: IStore) => state.user);
  if (user) {
    return <Navigate to="/" />;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    // @ts-ignore
    mode: "onChange ",
  });
  // const notify = () => {
  //   toast.success("Не удалось войти, проверьте данные", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };

  const handleSignIn = async (values: any): Promise<void> => {
    dispatch(signIn(values, navigate));
  };

  return (
    <>
      <h1 className="form-header">Войдите</h1>
      <form className="form-auth" onSubmit={handleSubmit(handleSignIn)}>
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
        <Button variant="contained" type="submit" color="success">
          Войти
        </Button>

        <span className="span">
          Если нет аккаунта
          <Link to="/sign_up">
            <Button color="primary" variant="text">
              Register
            </Button>
          </Link>
        </span>
      </form>
    </>
  );
};

export default FormAuth;
