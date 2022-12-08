import padNumber from "../helpers/padNumber";
import useTimer from "../hooks/useTimer";
import "./Timer.scss";

const Timer = () => {
  const {
    timer,
    remaining,
    updateName,
    updateDuration,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer();

  return timer.isRunning ? (
    <div className="timer">
      <div
        className={`timer-indicator ${timer.isPaused ? "paused" : "running"}`}
      ></div>
      <div className="time-display">
        {remaining.hours}:{padNumber(remaining.minutes, 2)}:
        {padNumber(remaining.seconds, 2)}
        <small>.{remaining.subseconds}</small>
      </div>
      <div className="timer-control">
        {timer.isPaused ? (
          <>
            <button onClick={() => startTimer()}>
              <i className="fa-solid fa-play"></i>
            </button>
            <button onClick={() => resetTimer()}>
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </>
        ) : (
          <button onClick={() => pauseTimer()}>
            <i className="fa-solid fa-pause"></i>
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="timer">
      <div
        className={`timer-indicator ${timer.isRunning ? "running" : null}`}
      ></div>
      <div className="time-display">
        {remaining.hours}:{padNumber(remaining.minutes, 2)}:
        {padNumber(remaining.seconds, 2)}
        <small>.{remaining.subseconds}</small>
      </div>
      <div className="timer-control">
        <button onClick={() => startTimer()}>
          <i className="fa-solid fa-play"></i>
        </button>
        {timer.isFinished && (
          <button onClick={() => resetTimer()}>
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
