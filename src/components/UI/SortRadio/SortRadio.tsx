import { useState, useRef, useEffect } from "react";
import "../StatusSelect/StatusSelect.scss"; // можно использовать тот же стиль

import arrowDown from "@icons/arrowDown.svg";
import filter from "@icons/filter.svg";

const SortRadio = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Сначала новые");
  const ref = useRef<HTMLDivElement>(null);

  const options = ["Сначала новые", "Сначала старые"];

  // закрытие по клику мимо
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="statusSelect" ref={ref}>
      <div
        className={`statusSelect__header ${open ? "open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <img src={filter} alt="" />
        Сортировка
        <span className={`arrow ${open ? "open" : ""}`}>
          <img src={arrowDown} />
        </span>
      </div>

      {open && (
        <div className="statusSelect__dropdown">
          {options.map((o) => (
            <label key={o} className="statusSelect__item">
              <input
                type="radio"
                name="sort_radio"
                checked={selected === o}
                onChange={() => setSelected(o)}
              />
              <span>{o}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortRadio;
