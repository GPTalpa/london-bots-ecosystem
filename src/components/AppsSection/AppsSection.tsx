import "./AppsSection.scss";

import HeaderBlock from "@UI/HeaderBLock";

import games from "@icons/games.svg";
import apps from "@icons/apps.svg";

import AppSectionItem from "@UI/AppSectionItem";

import { mobileGame } from "./mobileGame.mock";
import { appsMock } from "./apps.mock";
import { gameMock } from "./game.mock";
import AppsSectionBtn from "@UI/AppsSectionBtn";

const AppsSection = () => {
  return (
    <div className="appsSection-blocks">
      <div className="appsSection-blocks__top">
        <div className="appsSection-blocks__left">
          <HeaderBlock icon={games} label="Мобильные игры" />
          <div className="appsSection-content">
            {mobileGame.map((e, i) => {
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
          <AppsSectionBtn href="someHref" />
        </div>
        <div className="appsSection-blocks__right">
          <HeaderBlock icon={apps} label="Приложения" />
          <div className="appsSection-content">
            {appsMock.map((e, i) => {
              return (
                <AppSectionItem
                  key={i}
                  icon={e.icon_url}
                  url={e.slug}
                  label={e.title}
                />
              );
            })}
          </div>{" "}
          <AppsSectionBtn href="someHref" />
        </div>
      </div>
      <div className="appsSection-blocks__bottom">
        <HeaderBlock icon={games} label="Игры" />
        <div className="appsSection-content">
          {gameMock.map((e, i) => {
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
        <AppsSectionBtn href="someHref" classCustom="appsSectionBtnFullWidth" />
      </div>
    </div>
  );
};
export default AppsSection;
