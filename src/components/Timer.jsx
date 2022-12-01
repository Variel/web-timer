const Timer = ({ isRunning, duration, targetTime, timeoutId, name }) => {
  return isRunning ? (
    <div className="timer">running</div>
  ) : (
    <div className="timer">not running</div>
  );
};

export default Timer;
