import "./HeaderBlock.scss";

import { useTheme } from "@/hooks/useTheme";

type IHeaderBlock = {
  icon?: string;
  label: string;
};

const HeaderBlock = ({ icon, label }: IHeaderBlock) => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "header-block" : "header-block light-mode"}>
      {icon ? <img src={icon} alt={label} /> : ""}
      <h4>{label}</h4>
    </div>
  );
};

export default HeaderBlock;
