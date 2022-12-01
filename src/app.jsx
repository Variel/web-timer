import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";
import useNotification from "./hooks/useNotification";
import useTimers from "./hooks/useTimers";
import Timer from "./components/Timer";

export function App() {
  const { permission, requestPermission } = useNotification();

  const { timers, addTimer, updateTimer, startTimer, pauseTimer } = useTimers();

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
          {timers.map((timer, idx) => (
            <Timer
              {...timer}
              onUpdate={(timer) => updateTimer(idx, timer)}
              onStart={() => startTimer(idx)}
              onPause={() => pauseTimer(idx)}
            />
          ))}
        </>
      )}
    </>
  );
}
