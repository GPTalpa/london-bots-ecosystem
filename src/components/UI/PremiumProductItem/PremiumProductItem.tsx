import "./PremiumProductItem.scss";

import Rating from "@UI/Rating";
import { useTheme } from "@/hooks/useTheme";

type IPremiumProductItem = {
  title: string;
  picture_url: string;
  url?: string;
  price: string;
  price_before_discount: string;
  app: {
    slug: string;
    title: string;
    icon_url: string;
  };
  category_title: string;
  pictures?: {
    url: string;
  };
  seller: {
    rating: string;
    reviews_count: number;
  };
};

const PremiumProductItem = ({
  title,
  picture_url,
  //   url,
  price,
  price_before_discount,
  //   pictures,
  app,
  category_title,
  seller,
}: IPremiumProductItem) => {
  const { darkMode } = useTheme();

  const price_rounded = Math.ceil(+price);
  const price_old_rounded = Math.ceil(+price_before_discount);
  const discount = Math.ceil((price_rounded / price_old_rounded) * 100);

  return (
    <div className="premiumProductItem">
      <div className="premiumProductItem-mainImage">
        <img
          className="premiumProductItem-mainImage-content"
          src={picture_url}
          alt={title}
        />
      </div>

      <div className="premiumProductItem_category">
        <div className="premiumProductItem_category-title">
          <img src={app.icon_url} alt={app.title} />
          <a href={app.slug} className={darkMode ? "" : "light-mode"}>
            {app.title}
          </a>
        </div>
        <div className="premiumProductItem_category-name">{category_title}</div>
      </div>
      <p
        className={
          darkMode
            ? "premiumProductItem_title"
            : "premiumProductItem_title light-mode"
        }
      >
        {title}
      </p>
      <div className="premiumProductItem_seller">
        <div
          className={
            darkMode
              ? "premiumProductItem_seller_rating"
              : "premiumProductItem_seller_rating light-mode"
          }
        >
          {seller.rating}
        </div>
        <div className="premiumProductItem_seller_stars">
          <Rating value={+seller.rating} />
        </div>
        <p>{seller.reviews_count} отзывов</p>
      </div>
      <div className="premiumProductItem_price">
        <div className="premiumProductItem_price-item">{price_rounded}</div>
        <div className="premiumProductItem_price-percent">-{discount} %</div>
        <div className="premiumProductItem_price-old_price">
          {price_old_rounded}
        </div>
      </div>
    </div>
  );
};

export default PremiumProductItem;
