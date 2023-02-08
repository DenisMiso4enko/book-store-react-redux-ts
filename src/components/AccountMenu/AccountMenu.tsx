import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { IoHeartOutline, IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actionCreators/userActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { setTheme } from "../../redux/actionCreators/settingsActionCreators";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./style.css";

export default function AccountMenu() {
  const { user } = useSelector((state: IStore) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { items } = useSelector((state: IStore) => state.cart);
  const { theme } = useSelector((state: IStore) => state.settings);
  const cartLength = items.length;
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogOut = (): void => {
    dispatch(logOut());
    localStorage.removeItem("jwtAccess");
    localStorage.removeItem("jwtRefresh");
    navigate("/sign_in");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleToggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div className="header-btns">
          <Link to="/favorites">
            <Button className="btn-icon" variant="text" size="large">
              <IoHeartOutline fontSize="20px" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button className="btn-icon" variant="text" size="large">
              <IoBagHandleOutline fontSize="20px" />
              <span>{cartLength}</span>
            </Button>
          </Link>
        </div>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {`${user.username?.charAt(0).toUpperCase()}`}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem className="menu-btns">
          <Link to="/favorites">
            <Button className="btn-icon" variant="text" size="large">
              <IoHeartOutline fontSize="20px" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button className="btn-icon" variant="text" size="large">
              <IoBagHandleOutline fontSize="20px" />
              <span>{cartLength}</span>
            </Button>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        {/*<MenuItem>*/}
        {/*  <div className="theme-action">*/}
        {/*    <button className={`btn btn--${theme}`} onClick={handleToggleTheme}>*/}
        {/*      {theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />}*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</MenuItem>*/}
      </Menu>
    </React.Fragment>
  );
}
