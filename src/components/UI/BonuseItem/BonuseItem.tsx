// import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";
import "./BonuseItem.scss";

type IBonuseItem = {
  bg: string;
  btn_text: string;
  href: string;

  classCustom?: string;
  add_name?: string;
  innovation?: boolean;
  icon_add?: string;
  add_text?: string;
};

const BonuseItem = ({
  href,
  classCustom,
  bg,
  add_name,
  innovation,
  icon_add,
  add_text,
  btn_text,
}: IBonuseItem) => {
  const className = classNames("bonuseItem", classCustom);

  return (
    <a href={href} className={className}>
      <img src={bg} alt="" />
      <div className="bonuseItem_header">
        {add_name ? <div className="add">{add_name}</div> : ""}
        {innovation ? <div className="bonuseItem_header-new">Новинка</div> : ""}
      </div>
      <div className="bonuseItem_footer">
        <div className="bonuseItem_footer-text">
          {icon_add ? <img src={icon_add} alt="" /> : ""}
          {add_text ? <p>{add_text}</p> : ""}
        </div>
        <div className="bonuseItem_footer-btn--text">{btn_text}</div>
      </div>
    </a>
  );
};

export default BonuseItem;
