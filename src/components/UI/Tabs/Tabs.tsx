import { useState } from "react";
import "./Tabs.scss";

type TabItem = {
  id: string;
  label: string;
  icon?: string;
};

type ITabs = {
  items: TabItem[];
  onChange?: (id: string | null) => void;
};

const Tabs = ({ items, onChange }: ITabs) => {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (id: string) => {
    if (active === id) {
      setActive(null);
      onChange?.(null);
      return;
    }

    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="tabs">
      {items.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${active === tab.id ? "active" : ""}`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.icon && <img src={tab.icon} alt="" />}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
