import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/endpoints";
import "./server-loading.css";

interface ServerLoadingProps {
  children: React.ReactNode;
}

const ServerLoading = ({ children }: ServerLoadingProps) => {
  const [serverReady, setServerReady] = useState(false);

  useEffect(() => {
    let interval: number;

    const checkServer = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/health`);

        if (res.ok) {
          setServerReady(true);
          clearInterval(interval);
        }
      } catch {
        setServerReady(false);
      }
    };

    checkServer();

    interval = window.setInterval(checkServer, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!serverReady) {
    return (
      <div className="server-loading">
        <div className="server-loading-card">
          <div className="server-spinner" />

          <h2>Łączenie z serwerem...</h2>

          <p>Nie stać mnie na lepszy pakiet okej? 🐸</p>
          <p>Może to potrwać z 10 sekund</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ServerLoading;
