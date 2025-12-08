import "./InputSearch.scss";

import search from "@icons/search.svg";

const InputSearch = () => (
  <div className="pfb_input">
    <img src={search} alt="" />
    <input placeholder="Поиск по товарам..." />
  </div>
);

export default InputSearch;
