import "./PremiumProduct.scss";

import HeaderBlock from "@UI/HeaderBLock";

import diamond from "@icons/diamond.svg";

import PremiumProductItem from "@UI/PremiumProductItem";

import { products } from "./products.mock";
import AppsSectionBtn from "@UI/AppsSectionBtn";
const PremiumProduct = () => {
  return (
    <div className="premiumProduct-blocks">
      <HeaderBlock label="Премиум товары" icon={diamond} />
      <div className="premiumProduct-content">
        {products.map((e, i) => {
          return (
            <PremiumProductItem
              key={i}
              title={e.title}
              picture_url={e.picture_url}
              price={e.price}
              price_before_discount={e.price_before_discount}
              app={e.app}
              category_title={e.category.title}
              seller={e.seller.stats}
            />
          );
        })}
      </div>
      <AppsSectionBtn
        href="somehref"
        text="Показать еще"
        classCustom="premiumProduct-btn"
      />
    </div>
  );
};

export default PremiumProduct;
