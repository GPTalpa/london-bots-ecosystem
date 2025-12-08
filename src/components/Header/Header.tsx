import React, { useState } from "react";
import "./Header.scss";

import { useTheme } from "@/hooks/useTheme";
import Popup from "@UI/Popup";
import AppsSectionBtn from "../UI/AppsSectionBtn";
import logoLight from "@images/logo-light-mode.webp";
import logoDark from "@images/logo-dark-mode.webp";

import bonuses from "@icons/bonuses.svg";
import chats from "@icons/chats.svg";
import login from "@icons/login.svg";
import sell from "@icons/sell.svg";
import steam from "@icons/steam.svg";

import tg from "@icons/tg.svg";
const Header = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <header className={`header ${darkMode ? "header-dark" : "header-light"}`}>
      <div className="header-left">
        <a href="/" className="logo-link">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="app logo"
            className="logo"
          />
        </a>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>

      <div className="header-search">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Поиск игр и приложений"
        />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.66683 14.5007C3.90016 14.5007 0.833496 11.434 0.833496 7.66732C0.833496 3.90065 3.90016 0.833984 7.66683 0.833984C11.4335 0.833984 14.5002 3.90065 14.5002 7.66732C14.5002 11.434 11.4335 14.5007 7.66683 14.5007ZM7.66683 1.83398C4.44683 1.83398 1.8335 4.45398 1.8335 7.66732C1.8335 10.8807 4.44683 13.5007 7.66683 13.5007C10.8868 13.5007 13.5002 10.8807 13.5002 7.66732C13.5002 4.45398 10.8868 1.83398 7.66683 1.83398Z"
            fill="currentColor"
          ></path>
          <path
            d="M14.6666 15.1676C14.54 15.1676 14.4133 15.1209 14.3133 15.0209L12.98 13.6876C12.7866 13.4943 12.7866 13.1743 12.98 12.9809C13.1733 12.7876 13.4933 12.7876 13.6866 12.9809L15.02 14.3143C15.2133 14.5076 15.2133 14.8276 15.02 15.0209C14.92 15.1209 14.7933 15.1676 14.6666 15.1676Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <nav className="header-nav">
        <a href="/sell" className="nav-item">
          <img src={sell} alt="" />
          Продать
        </a>
        <a href="/chats" className="nav-item">
          <img src={chats} alt="" />
          Чаты
        </a>
        <a href="/bonus-center" className="nav-item">
          <img src={bonuses} alt="" />
          Бонусы
        </a>
        <a href="/topups/topup?slug=steam-cis" className="nav-item">
          <img src={steam} alt="" />
          Steam
        </a>
        <a className="nav-item" onClick={() => setOpen(true)}>
          <img src={login} alt="" />
          Войти
        </a>
      </nav>
      <Popup
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Необходимо войти в аккаунт"
      >
        <AppsSectionBtn
          onClick={() => alert("Действие")}
          text="Войти через Telegram"
          classCustom="popup_btn"
          icon={tg}
        />
      </Popup>
    </header>
  );
};

export default Header;
