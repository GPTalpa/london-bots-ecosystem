import React, { useState } from "react";
import "./FAQ.scss";

import arrowDown from "@icons/arrowDown.svg";

const faqs = [
  {
    question: "Что такое задания?",
    answer:
      "Задания – возможность получить бесплатно баланс на сайте или другие вознаграждения. Вы выполняете задания наших партнеров – а мы делимся с вами вознаграждением!",
  },
  {
    question: "Когда я получу вознаграждение?",
    answer:
      "Обычно это описано внутри карточки задания. Если нет, то стандартный срок выдачи вознаграждения от 10 до 30 дней.",
  },
  {
    question: "Не пришло вознаграждение, что делать?",
    answer:
      "Если прошел ровно срок указанный в карточке задания, но вы еще не получили вознаграждение, то подождите еще пару дней. Если все еще не получили — напишите нам в поддержку.",
  },
  {
    question: "Я выполнил все задания, когда появятся новые?",
    answer:
      "Вы можете повторно выполнять задания с другого устройства, если они не пропали со страницы. Новые задания находятся в разработке.",
  },
  {
    question: "Остались ещё вопросы?",
    answer: "Напишите нам в поддержку.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {faqs.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className={`faq-question ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            {item.question}
            <img
              src={arrowDown}
              alt="arrow"
              className={`arrow ${openIndex === index ? "rotated" : ""}`}
            />
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? "200px" : "0px",
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
