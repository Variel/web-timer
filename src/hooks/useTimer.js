import { useState, useCallback } from "preact/hooks";
import padNumber from "../helpers/padNumber";

const useTimer = () => {
  const [timer, setTimer] = useState({
    isRunning: false,
    isPaused: false,
    isFinished: false,
    duration: 5 * 60 * 1000,
    elapsedTime: null,
    intervalId: null,
    lastUpdatedAt: null,
    name: "",
  });

  const updateName = useCallback((name) => {
    setTimer((timer) => ({
      ...timer,
      name,
    }));
  });

  const updateDuration = useCallback((duration) => {
    setTimer((timer) => ({
      ...timer,
      duration,
    }));
  });

  const onTick = useCallback(() => {
    const now = new Date();

    setTimer((timer) => {
      const newTimer = { ...timer };

      newTimer.elapsedTime += now - newTimer.lastUpdatedAt;
      newTimer.lastUpdatedAt = now;

      if (newTimer.elapsedTime >= newTimer.duration) {
        newTimer.elapsedTime = newTimer.duration;

        clearTimeout(newTimer.intervalId);
        newTimer.isRunning = false;
        newTimer.isPaused = false;
        newTimer.isFinished = true;

        new Notification("Timer finished!", {
          body: `${newTimer.name} timer has finished`,
        });
      }

      return newTimer;
    });
  }, []);

  const startTimer = useCallback(() => {
    setTimer((timer) => ({
      ...timer,
      isRunning: true,
      isPaused: false,
      lastUpdatedAt: new Date(),
      intervalId: setInterval(onTick),
    }));
  }, []);

  const pauseTimer = useCallback(() => {
    setTimer((timer) => {
      clearInterval(timer.intervalId);

      return { ...timer, isPaused: true, intervalId: null };
    });
  }, []);

  const resetTimer = useCallback(() => {
    setTimer((timer) => ({
      ...timer,
      isRunning: false,
      isPaused: false,
      isFinished: false,
      elapsedTime: null,
      intervalId: null,
      lastUpdatedAt: null,
    }));
  }, []);

  let remaining = (timer.duration - timer.elapsedTime) / 100;
  let subseconds = Math.floor(remaining % 10);
  remaining /= 10;
  let seconds = Math.floor(remaining % 60);
  remaining /= 60;
  let minutes = Math.floor(remaining % 60);
  remaining /= 60;
  let hours = Math.floor(remaining);
  const display = `${padNumber(hours, 2)}h ${padNumber(
    minutes,
    2
  )}m ${padNumber(seconds, 2)}.${subseconds}s`;

  return {
    timer,
    remaining: {
      hours,
      minutes,
      seconds,
      subseconds,
      display,
    },
    updateName,
    updateDuration,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useTimer;
