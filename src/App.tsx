import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import Sell from "@pages/Sell";

import ThemeProvider from "@/context/Theme/ThemeProvider";

import "@/main.scss";

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
