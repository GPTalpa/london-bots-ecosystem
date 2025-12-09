import "./HeaderBlock.scss";

import { useTheme } from "@/hooks/useTheme";

type IHeaderBlock = {
  icon?: string;
  label: string;
  arrow_back?: string;
  custom_class?: string;
  onClick?: () => void;
};

const HeaderBlock = ({
  icon,
  label,
  arrow_back,
  custom_class,
  onClick,
}: IHeaderBlock) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode ? "header-block" : "header-block light-mode"
      } ${custom_class}`}
    >
      {icon ? <img src={icon} alt={label} /> : ""}
      {arrow_back ? (
        <div className="backArrow" onClick={onClick}>
          <img src={arrow_back} alt="" />
        </div>
      ) : (
        ""
      )}
      <h4>{label}</h4>
    </div>
  );
};

export default HeaderBlock;
