import { useTheme } from "@/hooks/useTheme";

import "./Footer.scss";

import mir from "@icons/mir.svg";
import visa from "@icons/visa.svg";
import mastercard from "@icons/mastercard.svg";
import sbp from "@icons/sbp.svg";
import yuMoney from "@icons/yuMoney.svg";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={
        darkMode ? "footer" : "footer light-mode--bg light-mode--second-color"
      }
    >
      <div className="footer_firstLine">
        <div className="footer_firstLine_information">
          <h4 className={darkMode ? "" : "light-mode"}>Информация</h4>
          <div className="footer_firstLine_information_list">
            <a className="footer_firstLine_information_list-item1">
              Политика конфиденциальности
            </a>
            <a className="footer_firstLine_information_list-item2">Контакты</a>
            <a className="footer_firstLine_information_list-item3">
              Реферальная система
            </a>
            <a className="footer_firstLine_information_list-item4">
              Пользовательское соглашение
            </a>
            <a className="footer_firstLine_information_list-item5">
              Условия продажи
            </a>
          </div>
        </div>
        <div className="footer_firstLine_payment">
          <h4 className={darkMode ? "" : "light-mode"}>Способы оплаты</h4>
          <div className="footer_firstLine_payment-list">
            <div className="footer_firstLine_payment-list-item">
              <img src={mir} alt="" />
            </div>
            <div className="footer_firstLine_payment-list-item">
              <img src={visa} alt="" />
            </div>
            <div className="footer_firstLine_payment-list-item">
              <img src={mastercard} alt="" />
            </div>
            <div className="footer_firstLine_payment-list-item">
              <img src={sbp} alt="" />
            </div>
            <div className="footer_firstLine_payment-list-item">
              <img src={yuMoney} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_secondLine">
        2025 © holdik.ru — маркетплейс игровых товаров и услуг. Все права
        защищены. ТОО "Эко Эволюшн" БИН 220640014294 Республика Казахстан, обл,
        Жетісу, г. Талдыкорган, мкр. Военный Городок "УЛАН", д. 6, кв. 14
      </div>
    </footer>
  );
};
export default Footer;
