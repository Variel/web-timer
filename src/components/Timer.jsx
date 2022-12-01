import useTimer from "../hooks/useTimer";

const Timer = () => {
  const {
    timer,
    updateName,
    updateDuration,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer();

  return timer.isRunning ? (
    <div className="timer">
      {timer.elapsedTime}
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
  ) : (
    <div className="timer">
      {timer.elapsedTime}
      <button onClick={() => startTimer()}>
        <i className="fa-solid fa-play"></i>
      </button>
      {timer.isFinished && (
        <button onClick={() => resetTimer()}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      )}
    </div>
  );
};

export default Timer;
