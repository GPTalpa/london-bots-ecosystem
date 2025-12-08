import "./Home.scss";
import Carousel from "@/components/Carousel";

import AppsSection from "@/components/AppsSection";
import PremiumProduct from "@/components/PremiumProduct";

export default function Home() {
  return (
    <div className="home">
      <section className="home_carousel">
        <Carousel />
      </section>
      <section className="home_appSection">
        <AppsSection />
      </section>
      <section className="home_premiumProduct">
        <PremiumProduct />
      </section>
    </div>
  );
}
