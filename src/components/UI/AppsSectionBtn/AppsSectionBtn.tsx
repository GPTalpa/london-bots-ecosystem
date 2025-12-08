import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";
import "./AppsSectionBtn.scss";

type IAppsSectionBtn = {
  href?: string;
  classCustom?: string;
  text?: string;
  onClick?: unknown;
  icon?: string;
};

const AppsSectionBtn = ({ href, classCustom, text, icon }: IAppsSectionBtn) => {
  const { darkMode } = useTheme();

  const className = classNames("appsSectionBtn", classCustom, {
    "light-mode--second-color light-mode--bg": !darkMode,
  });

  return (
    <a href={href} className={className}>
      {icon ? <img src={icon} alt="" /> : ""}
      {text ? text : "Смотреть все"}
    </a>
  );
};

export default AppsSectionBtn;
