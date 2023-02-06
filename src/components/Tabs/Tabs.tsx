import React from "react";
import { TABS } from "../../constanse";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { setActiveTab } from "../../redux/actionCreators/settingsActionCreators";
import { selectDesc } from "../../redux/selectors/descSelector";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./Tabs.css";

const Tabs = () => {
  const { activeTab } = useSelector((state: IStore) => state.settings);
  const dispatch = useDispatch();
  const details = useSelector((state: IStore) => selectDesc(state, activeTab));
  return (
    <div className="one-book__tabs">
      <div className="tabs">
        {Object.keys(TABS).map((tab) => (
          <button
            key={tab}
            className="btn btn-tab"
            style={{
              boxShadow: activeTab === tab ? "0 2px 0 0 black" : "",
              color: activeTab === tab ? "black" : "lightslategray",
            }}
            onClick={() => dispatch(setActiveTab(tab))}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div>
          <p className="tab-details">{details}</p>
          <div className="social-btns">
            <a href="/" target="_blank" className="social-btns-item">
              <FacebookIcon />
            </a>
            <a href="/" target="_blank" className="social-btns-item">
              <TwitterIcon />
            </a>
            <a href="/" target="_blank" className="social-btns-item">
              <MoreHorizOutlinedIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
