import "./AppSelector.scss";

import iconApps from "@icons/iconApps.svg";

const AppSelector = () => (
  <button className="pfb_app_btn">
    <img src={iconApps}></img>Приложения
  </button>
);

export default AppSelector;
