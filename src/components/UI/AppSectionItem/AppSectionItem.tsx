import "./AppSectionItem.scss";

import { useTheme } from "@/hooks/useTheme";

type IAppSectionItem = {
  icon: string;
  label: string;
  url: string;
};

const AppSectionItem = ({ icon, label, url }: IAppSectionItem) => {
  const { darkMode } = useTheme();
  return (
    <a
      href={url}
      className={darkMode ? "appSectionItem" : "appSectionItem light-mode"}
    >
      <img src={icon} alt={label} />
      <p>{label}</p>
    </a>
  );
};

export default AppSectionItem;
