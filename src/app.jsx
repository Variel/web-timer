import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";
import useNotification from "./hooks/useNotification";
import Timer from "./components/Timer";

export function App() {
  const { permission, requestPermission } = useNotification();
  const [timerCount, setTimerCount] = useState(1);

  return (
    <>
      <h1>Web Timer</h1>
      {permission !== "granted" ? (
        <div class="card">
          <p>The notification permission is required to use this site</p>
          <button onClick={() => requestPermission()}>
            <i className="fa-regular fa-bell"></i> Grant Permission
          </button>
        </div>
      ) : (
        <>
          {[...Array(timerCount)].map((_) => (
            <Timer />
          ))}
          <button onClick={() => setTimerCount((count) => count + 1)}>
            <i className="fa-regular fa-plus"></i> New Timer
          </button>
        </>
      )}
    </>
  );
}
