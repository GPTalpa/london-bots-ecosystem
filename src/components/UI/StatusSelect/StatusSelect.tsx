import { useState, useRef, useEffect } from "react";
import "./StatusSelect.scss";

import arrowDown from "@icons/arrowDown.svg";
import filter from "@icons/filter.svg";

type IStatusSelect = {
  type: "products" | "orders" | "sold";
};

const StatusSelect = ({ type }: IStatusSelect) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  let options: string[] = [];

  if (type === "products")
    options = [
      "Продаются",
      "Модерация",
      "Отклонены",
      "Проданы",
      "Сняты с продажи",
      "Черновик",
    ];
  if (type === "orders")
    options = [
      "Оплаченные",
      "Подтверждение",
      "Завершенные",
      "Возвраты",
      "Споры",
    ];
  if (type === "sold")
    options = [
      "Оплаченные",
      "Подтверждение",
      "Завершенные",
      "Возвраты",
      "Споры",
    ];

  const toggleOption = (o: string) => {
    setChecked((prev) =>
      prev.includes(o) ? prev.filter((p) => p !== o) : [...prev, o]
    );
  };

  // закрытие при клике мимо
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
        Статус
        <span className={`arrow ${open ? "open" : ""}`}>
          <img src={arrowDown}></img>
        </span>
      </div>

      {open && (
        <div className="statusSelect__dropdown">
          {options.map((o) => (
            <label key={o} className="statusSelect__item">
              <input
                type="checkbox"
                checked={checked.includes(o)}
                onChange={() => toggleOption(o)}
              />
              <span>{o}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusSelect;
