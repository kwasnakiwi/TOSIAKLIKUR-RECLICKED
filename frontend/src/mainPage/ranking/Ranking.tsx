import { useEffect, useState } from "react";
import "./ranking.css";
import { BASE_URL } from "../../utils/endpoints";
import clsx from "clsx";

interface Player {
  id: number;
  username: string;
  clicks: number;
  coins: number;
}

const Ranking = () => {
  const [ranking, setRanking] = useState<Player[] | null>(null);
  const [sortType, setSortType] = useState("clicks");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    const getRanking = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/api/player/ranking?sort=${sortType}&order=${order}`,
        );

        const data = await res.json();

        if (!res.ok) {
          console.error(data.error);
          return;
        }

        setRanking(data || []);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getRanking();
  }, [sortType, order]);

  return (
    <>
      <div className="main-container">
        <div className="ranking-top-buttons">
          <div className="left">
            <button
              onClick={() => setOrder("asc")}
              className={clsx(
                "ranking-top-button",
                order === "asc" && "selected",
              )}
            >
              Najgorszy
            </button>
            <button
              onClick={() => setOrder("desc")}
              className={clsx(
                "ranking-top-button",
                order === "desc" && "selected",
              )}
            >
              Najlepszy
            </button>
          </div>
          <div className="right">
            <button
              onClick={() => setSortType("clicks")}
              className={clsx(
                "ranking-top-button",
                sortType === "clicks" && "selected",
              )}
            >
              Kliknięcia
            </button>
            <button
              onClick={() => setSortType("coins")}
              className={clsx(
                "ranking-top-button",
                sortType === "coins" && "selected",
              )}
            >
              Monety
            </button>
          </div>
        </div>
        <div className="ranking">
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          <div className="ranking-player heading">
            <div className="ranking-player-item">
              <span>Miejsce</span>
            </div>
            <div className="ranking-player-item">
              <span>Nazwa użytkownika</span>
            </div>
            <div className="ranking-player-item">
              <span>Kliknięcia</span>
            </div>
            <div className="ranking-player-item">
              <span>Monety</span>
            </div>
          </div>
          {ranking?.map((player, i) => (
            <div key={player.id} className="ranking-player">
              <div className="ranking-player-item">
                <span>
                  #{order === "desc" ? i + 1 : ranking?.length - i}
                </span>
              </div>
              <div className="ranking-player-item">
                <span>{player.username}</span>
              </div>
              <div className="ranking-player-item">
                <span>{player.clicks}</span>
              </div>
              <div className="ranking-player-item">
                <span>{player.coins}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ranking;
