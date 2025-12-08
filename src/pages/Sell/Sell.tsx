import "./Sell.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBlock from "@UI/HeaderBLock";
import InputSearch from "@UI/InputSearch";

import AppSectionItem from "@UI/AppSectionItem";

import arrowBack from "@icons/arrowBack.svg";
import Tabs from "@UI/Tabs";
import iconApps from "@icons/apps.svg";
import games from "@icons/games.svg";

import { all } from "./all.mock";
import { appsMobile } from "./appsMobile.mock";
import { apps } from "./apps.mock";
import { gameMock } from "@/components/AppsSection/game.mock";

export default function Sell() {
  const [id, setId] = useState<string | null>(null);
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  return (
    <div className="sell">
      <HeaderBlock
        label="Продать товар"
        arrow_back={arrowBack}
        custom_class="sell_header"
        onClick={onBack}
      />
      <div className="sell_filter_block">
        <InputSearch placeholder="Искать игру или приложение" />
        <Tabs
          items={[
            { id: "mobile", label: "Мобильные игры", icon: games },
            { id: "apps", label: "Приложения", icon: iconApps },
            { id: "games", label: "Игры", icon: games },
          ]}
          onChange={(id) => setId(id)}
        />
      </div>
      <div className="sell_filter_content">
        {!id &&
          all.map((e, i) => {
            console.log(e);
            return (
              <AppSectionItem
                key={i}
                icon={e.icon_url}
                url={e.slug}
                label={e.title}
              />
            );
          })}
        {id === "mobile" &&
          appsMobile.map((e, i) => {
            return (
              <AppSectionItem
                key={i}
                icon={e.icon_url}
                url={e.slug}
                label={e.title}
              />
            );
          })}
        {id === "apps" &&
          apps.map((e, i) => {
            return (
              <AppSectionItem
                key={i}
                icon={e.icon_url}
                url={e.slug}
                label={e.title}
              />
            );
          })}
        {id === "games" &&
          gameMock.map((e, i) => {
            return (
              <AppSectionItem
                key={i}
                icon={e.icon_url}
                url={e.slug}
                label={e.title}
              />
            );
          })}
      </div>
    </div>
  );
}
