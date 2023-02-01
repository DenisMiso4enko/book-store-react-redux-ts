import React from "react";
import { TABS } from "../../constanse";
import "./Tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { setActiveTab } from "../../redux/actionCreators/settingsActionCreators";
import { selectDesc } from "../../redux/selectors/descSelector";

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
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Tabs;
