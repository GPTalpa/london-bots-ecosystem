import "./InputSearch.scss";

import search from "@icons/search.svg";

type IInputSearch = {
  placeholder: string;
};

const InputSearch = ({ placeholder }: IInputSearch) => (
  <div className="pfb_input">
    <img src={search} alt="" />
    <input placeholder={placeholder} />
  </div>
);

export default InputSearch;
