import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormReg from "./pages/Forms/FormReg/FormReg";
import FormAuth from "./pages/Forms/FormAuth/FormAuth";
import Header from "./components/Header/Header";
import ActivatePage from "./pages/Activate/ActivatePage";
import Success from "./pages/Success/Success";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actionCreators/userActionCreators";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import Footer from "./components/Footer/Footer";
import BookPage from "./pages/BookPage/BookPage";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import { IStore } from "./redux/types";

function App() {
  const { theme } = useSelector((state: IStore) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <div className={`container container--${theme}`}>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="sign_in" element={<FormAuth />} />
              <Route path="sign_up" element={<FormReg />} />
              <Route path="favorites" element={<Favorites />} />

              <Route path="activate">
                <Route path="*" element={<ActivatePage />} />
              </Route>
              <Route path="succses" element={<Success />} />
              <Route path="profile" element={<Profile />} />
              <Route path="cart" element={<Cart />} />
              <Route path="book">
                <Route path=":id" element={<BookPage />} />
              </Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
