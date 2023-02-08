import { logOut } from "../redux/actionCreators/userActionCreators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const dispatch = useDispatch();
const navigate = useNavigate();

export const handleLogOut = (): void => {
  dispatch(logOut());
  localStorage.removeItem("jwtAccess");
  localStorage.removeItem("jwtRefresh");
  navigate("/sign_in");
};
