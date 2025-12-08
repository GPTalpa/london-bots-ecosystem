import React from "react";
const tabs = ["Товары", "Продукты", "Продано"];

import "./ProfileFilterBlockHeader.scss";

type IProfileFilterBlockHeader = {
  active: number;
  updateActiveHeader: (value: number) => void;
};

const ProfileFilterBlockHeader = ({
  active,
  updateActiveHeader,
}: IProfileFilterBlockHeader) => {
  return (
    <div className="switchTabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`switchTabs-btn ${active === index ? "active" : ""}`}
          onClick={() => updateActiveHeader(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileFilterBlockHeader;
