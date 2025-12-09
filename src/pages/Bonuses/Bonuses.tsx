import "./Bonuses.scss";

import { useNavigate } from "react-router-dom";

import arrowBack from "@icons/arrowBack.svg";

import FAQ from "@UI/FAQ";
import HeaderBlock from "@UI/HeaderBLock";
import BonuseItem from "@UI/BonuseItem";

const MOCK_BONUSES = [
  {
    add_name: 'Реклама. ООО "Яндекс" ИНН 7736207543 erid: 2W5zFG62mgc',
    new: true,
    img: "https://holdik.ru/imgproxy/hmcI5Psg1grrJhmO5khvDs3YEN_fWlfHyz-MFv2Vc0g/rs:fill:240:0:0/g:ce/q:0/aHR0cHM6Ly9zMy5ob2xkaWsucnUvbWFya2V0cGxhY2UvdGFza3MvMDE5OWM4NDgtNGYzZS03MTAzLThlMDAtNGEzZGMyYzA2MGFlL3BpY3R1cmVzL2MxZWZhZTkxLTZmMDgtNGJiOC1iNGRjLTJiOWQ2M2Q0OTBhZS53ZWJw",
    icon: "https://holdik.ru/imgproxy/Mr1eqUfSt0X4NWKAGBzhbiMYWZVQjIGAoGSwEbPN2Xw/rs:fill:32:0:0/g:ce/q:0/aHR0cHM6Ly9zMy5ob2xkaWsucnUvbWFya2V0cGxhY2UvdGFza3MvMDE5OWM4NDgtNGYzZS03MTAzLThlMDAtNGEzZGMyYzA2MGFlL2ljb25zL2UzNjVhYWRmLTFlZDEtNGM0MC1hYmIwLTg1MzE3NzE5OTJiMS5zdmc",
    add_text: "Установить Яндекс Браузер",
    btn_text: "Открыть задание",
  },
  {
    add_name: 'Реклама. ООО "Яндекс" ИНН 7736207543 erid: 2W5zFHBmuKW',
    new: true,
    img: "https://holdik.ru/imgproxy/TZBYhljmHcPgoEzFoqx_gbf1pNPmvZg6_2ezKTA8wPY/rs:fill:240:0:0/g:ce/q:0/aHR0cHM6Ly9zMy5ob2xkaWsucnUvbWFya2V0cGxhY2UvdGFza3MvMDE5OWUyYTItOGEyYy03YjUwLTkzMDItYTNjZGI0ZWUwZTNiL3BpY3R1cmVzLzUyYmE1YmExLTUwOTYtNDE0ZS04ZGE1LWI1NzFiNDA3YWMyMi53ZWJw",
    icon: "https://holdik.ru/imgproxy/iQ7iGn2reCIAJLhl77jDUW77DTDD7ax6ukirnY1mank/rs:fill:32:0:0/g:ce/q:0/aHR0cHM6Ly9zMy5ob2xkaWsucnUvbWFya2V0cGxhY2UvdGFza3MvMDE5OWUyYTItOGEyYy03YjUwLTkzMDItYTNjZGI0ZWUwZTNiL2ljb25zL2FiN2I0YWQ2LTlhYTMtNDAxZC05YjJlLTIzZTcxYTQyYmFjOS5zdmc",
    add_text: "Сменить поиск на Яндекс",
    btn_text: "Открыть задание",
  },
  {
    img: "https://holdik.ru/imgproxy/yGVlEOOqNPO0SPN5SnGpETEfifd2UhCK1kr6DajFw5s/rs:fill:240:0:0/g:ce/q:0/aHR0cHM6Ly9zMy5ob2xkaWsucnUvbWFya2V0cGxhY2UvY29tbW9uL3Byb21vY29kZUNoYXJhY3Rlci5wbmc",
    btn_text: "Активировать промокод",
  },
];

export default function Bonuses() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  return (
    <div className="bonuses">
      <HeaderBlock
        label="Бонусный центр"
        arrow_back={arrowBack}
        custom_class="back_header"
        onClick={onBack}
      />
      <div className="bonuses_content">
        {MOCK_BONUSES.map((e, i) => {
          return (
            <BonuseItem
              href={"/"}
              key={i}
              add_name={e.add_name}
              innovation={e.new}
              bg={e.img}
              icon_add={e.icon}
              add_text={e.add_text}
              btn_text={e.btn_text}
            />
          );
        })}
      </div>
      <div className="bonuses_faq">
        <HeaderBlock
          label="Вопросы и ответы"
          custom_class="bonuses_faq--header"
        />
        <FAQ />
      </div>
    </div>
  );
}
