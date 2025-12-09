import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import Sell from "@pages/Sell";
import Bonuses from "@pages/Bonuses";

import ThemeProvider from "@/context/Theme/ThemeProvider";
import SearchProvider from "@/context/Search/SearchProvider";

import "@/main.scss";

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sell" element={<Sell />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}
