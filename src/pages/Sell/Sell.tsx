import { useState, useMemo, useEffect } from "react";
import "./Sell.scss";
import { useTheme } from "@/hooks/useTheme";
import { useSearch } from "@/hooks/useSearch";
import AppSectionItem from "@UI/AppSectionItem";

// Импорт mock данных
import { mobileGame } from "@/components/AppsSection/mobileGame.mock";
import { appsMock } from "@/components/AppsSection/apps.mock";
import { gameMock } from "@/components/AppsSection/game.mock";

const CATEGORIES = [
    { id: "mobile", name: "Мобильные игры" },
    { id: "apps", name: "Приложения" },
    { id: "games", name: "Игры" },
];

export default function Sell() {
    const { darkMode } = useTheme();
    const { searchQuery, setSearchQuery } = useSearch();
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Объединяем все данные в зависимости от выбранной категории
    const allGamesData = useMemo(() => {
        switch (selectedCategory) {
            case "mobile":
                return mobileGame;
            case "apps":
                return appsMock;
            case "games":
                return gameMock;
            case "all":
            default:
                return [...mobileGame, ...appsMock, ...gameMock];
        }
    }, [selectedCategory]);

    // Фильтрация по поисковому запросу
    const filteredGames = useMemo(() => {
        if (!searchQuery.trim()) {
            return allGamesData;
        }
        return allGamesData.filter((game) =>
            game.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [allGamesData, searchQuery]);

    return (
        <div className={`sell ${darkMode ? "sell-dark" : "sell-light"}`}>
            <div className="sell__header">
                <button className="sell__back">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <h1 className="sell__title">Продать товар</h1>
            </div>

            <div className="sell__wrap">
                <div className="sell__search">
                    <div className="sell__search-input">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.66683 14.5007C3.90016 14.5007 0.833496 11.434 0.833496 7.66732C0.833496 3.90065 3.90016 0.833984 7.66683 0.833984C11.4335 0.833984 14.5002 3.90065 14.5002 7.66732C14.5002 11.434 11.4335 14.5007 7.66683 14.5007ZM7.66683 1.83398C4.44683 1.83398 1.8335 4.45398 1.8335 7.66732C1.8335 10.8807 4.44683 13.5007 7.66683 13.5007C10.8868 13.5007 13.5002 10.8807 13.5002 7.66732C13.5002 4.45398 10.8868 1.83398 7.66683 1.83398Z"
                                fill="currentColor"
                            />
                            <path
                                d="M14.6666 15.1676C14.54 15.1676 14.4133 15.1209 14.3133 15.0209L12.98 13.6876C12.7866 13.4943 12.7866 13.1743 12.98 12.9809C13.1733 12.7876 13.4933 12.7876 13.6866 12.9809L15.02 14.3143C15.2133 14.5076 15.2133 14.8276 15.02 15.0209C14.92 15.1209 14.7933 15.1676 14.6666 15.1676Z"
                                fill="currentColor"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Искать игру или приложение"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="sell__categories">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            className={`sell__category ${selectedCategory === category.id ? "sell__category--active" : ""
                                }`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="sell__grid">
                {filteredGames.map((game, index) => (
                    <AppSectionItem
                        key={game.slug || index}
                        icon={game.icon_url}
                        url={`/sell/${game.slug}`}
                        label={game.title}
                    />
                ))}
            </div>
        </div>
    );
}
