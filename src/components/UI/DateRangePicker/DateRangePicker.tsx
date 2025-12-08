import React, { useState, useEffect, useRef } from "react";
import "./DateRangePicker.scss";

import calendar from "@icons/calendar.svg";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function getMonthDays(year: number, month: number) {
  // возвращаем массив дней с пустыми слотами в начале для сетки (пон-пн..)
  const firstDay = new Date(year, month, 1).getDay(); // 0..6 (вс..сб)
  const start = firstDay === 0 ? 6 : firstDay - 1; // сдвигаем так, чтобы неделя начиналась с пн
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const arr: (number | null)[] = Array(start).fill(null);
  for (let d = 1; d <= daysInMonth; d++) arr.push(d);
  return arr;
}

function formatShort(date: Date) {
  return date.toLocaleDateString();
}

const DateRangePicker: React.FC = () => {
  const today = new Date();
  const [visible, setVisible] = useState(false);

  // календарь управления
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth());

  // выбор диапазона (локально в модалке)
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  // сохранённый диапазон (после Apply)
  const [appliedRange, setAppliedRange] = useState<{
    from: Date;
    to: Date;
  } | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  const days = getMonthDays(year, month);

  // клик на день
  const onDayClick = (day: number | null) => {
    if (!day) return;
    const sel = new Date(year, month, day);
    // если нет начала или уже есть и конец — начать заново
    if (!start || (start && end)) {
      setStart(sel);
      setEnd(null);
      return;
    }
    // если выбранный >= start -> ставим end
    if (sel >= start) {
      setEnd(sel);
    } else {
      // если выбрали раньше start — делаем его новым стартом
      setStart(sel);
      setEnd(null);
    }
  };

  const changeMonth = (delta: number) => {
    let m = month + delta;
    let y = year;
    if (m < 0) {
      m = 11;
      y--;
    } else if (m > 11) {
      m = 0;
      y++;
    }
    setMonth(m);
    setYear(y);
  };

  // Закрытие модалки кликом мимо
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (visible && ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [visible]);

  const onApply = () => {
    if (start && end) {
      setAppliedRange({ from: start, to: end });
    } else if (start && !end) {
      // если задан только старт, считаем его и как конец (или игнорируем) — тут ставим конец = старт
      setAppliedRange({ from: start, to: start });
    } else {
      setAppliedRange(null);
    }
    setVisible(false);
  };

  const onReset = () => {
    setStart(null);
    setEnd(null);
    setAppliedRange(null);
  };

  // текст на кнопке
  const renderLabel = () => {
    if (!appliedRange) return "За всё время";
    return `От ${formatShort(appliedRange.from)} До ${formatShort(
      appliedRange.to
    )}`;
  };

  // подсказка: при открытии модалки и наличии appliedRange — показать его в локальном выборе
  useEffect(() => {
    if (visible && appliedRange) {
      setStart(appliedRange.from);
      setEnd(appliedRange.to);
      setYear(appliedRange.from.getFullYear());
      setMonth(appliedRange.from.getMonth());
    }
    if (visible && !appliedRange) {
      // по умолчанию текущая дата
      setStart(null);
      setEnd(null);
      setYear(today.getFullYear());
      setMonth(today.getMonth());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <>
      <button
        className="pfb_date_button"
        onClick={() => setVisible(true)}
        aria-haspopup="dialog"
      >
        <img src={calendar} alt="" />
        {renderLabel()}
      </button>

      {visible && (
        <div className="pfb_modal_overlay" role="dialog" aria-modal="true">
          <div
            className="pfb_modal"
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pfb_modal_header">
              <h3>Выбор даты</h3>
              <button
                className="pfb_close_btn"
                onClick={() => setVisible(false)}
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            {/* верхняя панель: год и контрол месяцев */}
            <div className="pfb_date_header">
              <input
                className="pfb_year_input"
                value={year}
                onChange={(e) => {
                  const v = parseInt(e.target.value.replace(/\D/g, ""), 10);
                  if (!isNaN(v)) setYear(v);
                }}
                aria-label="Год"
              />

              <div className="pfb_month_control">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  aria-label="Предыдущий месяц"
                >
                  ‹
                </button>
                <div className="pfb_month_label">{MONTHS[month]}</div>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  aria-label="Следующий месяц"
                >
                  ›
                </button>
              </div>
            </div>

            {/* дни недели */}
            <div className="pfb_day_names" aria-hidden>
              <div>пн</div>
              <div>вт</div>
              <div>ср</div>
              <div>чт</div>
              <div>пт</div>
              <div>сб</div>
              <div>вс</div>
            </div>

            {/* сетка дней */}
            <div className="pfb_days_grid" role="grid">
              {days.map((d, idx) => {
                const dateObj = d ? new Date(year, month, d) : null;
                const isStart =
                  start && dateObj && start.getTime() === dateObj.getTime();
                const isEnd =
                  end && dateObj && end.getTime() === dateObj.getTime();
                const inRange =
                  start && end && dateObj && dateObj >= start && dateObj <= end;

                return (
                  <div
                    key={idx}
                    className={[
                      "pfb_day_cell",
                      !d ? "empty" : "",
                      isStart ? "start" : "",
                      isEnd ? "end" : "",
                      inRange ? "range" : "",
                    ].join(" ")}
                    onClick={() => onDayClick(d)}
                    role={d ? "button" : undefined}
                    aria-disabled={!d}
                    tabIndex={d ? 0 : -1}
                  >
                    {d ?? ""}
                  </div>
                );
              })}
            </div>

            {/* футер с кнопками */}
            <div className="pfb_modal_footer">
              <button className="pfb_btn pfb_btn_reset" onClick={onReset}>
                Сбросить
              </button>
              <button className="pfb_btn pfb_btn_apply" onClick={onApply}>
                Применить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DateRangePicker;
