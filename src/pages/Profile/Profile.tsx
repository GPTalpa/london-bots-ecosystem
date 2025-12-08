import "./Profile.scss";

import HeaderBlock from "@UI/HeaderBLock";
import Rating from "@UI/Rating";
import AppsSectionBtn from "@UI/AppsSectionBtn";

import ProfileFilterBlock from "@/components/ProfileFilterBlock";

import { useTheme } from "@/hooks/useTheme";

import out from "@icons/out.svg";
import referral from "@icons/referral.svg";
import settings from "@icons/settings.svg";
import wallet from "@icons/wallet.svg";
import history from "@icons/history.svg";

import profile_avatar from "@images/profile_avatar.jpg";

export default function Profile() {
  const { darkMode } = useTheme();
  return (
    <div className="profile">
      <HeaderBlock label="Профиль" />
      <div className="profile_account-info">
        <div className="profile_account-info--left">
          <img
            className="profile_account-info--avatar"
            src={profile_avatar}
            alt=""
          />
          <div className="profile_account-info--raiting">
            <p className="profile_account-info--name">Talpa</p>
            <div className="premiumProductItem_seller">
              <div
                className={
                  darkMode
                    ? "premiumProductItem_seller_rating"
                    : "premiumProductItem_seller_rating light-mode"
                }
              >
                0.0
              </div>
              <div className="premiumProductItem_seller_stars">
                <Rating value={0} />
              </div>
              <p>0 отзывов</p>
            </div>
          </div>
        </div>
        <div className="profile_account-info--right">
          <div className="profile_account-info--right--icon">
            <img src={out} alt="" />
          </div>
          <div className="profile_account-info--right--icon">
            <img src={referral} alt="" />
          </div>
          <div className="profile_account-info--right--icon profile_account-info--right--icon--active">
            <img src={settings} alt="" />
          </div>
        </div>
      </div>
      <div className="profile_wallet">
        <div className="profile_wallet--info--wrapper">
          <div className="profile_wallet--info">
            <div className="profile_wallet--info--balance">
              <img src={wallet} alt="" />0 ₽
            </div>
            <img src={history} alt="" />
          </div>
          <div className="profile_wallet--withdrawal">
            <div className="profile_wallet--withdrawal-exclamation">!</div>
            <div className="profile_wallet--withdrawal-available">
              Доступно для вывода:{" "}
              <div className="profile_wallet--withdrawal-available-sum">
                0 ₽
              </div>
            </div>
          </div>
        </div>
        <AppsSectionBtn text="Пополнить" />
        <AppsSectionBtn text="Вывод" classCustom="profile_btn" />
        <AppsSectionBtn
          text="Бонусный центр"
          classCustom="profile_btn profile_btn-new"
        />
      </div>
      <ProfileFilterBlock />
    </div>
  );
}
