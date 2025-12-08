import "./SellButton.scss";

import plus from "@icons/plus.svg";

const SellButton = () => (
  <button className="pfb_sell_btn">
    <img src={plus} alt="" />
    Продать
  </button>
);

export default SellButton;
