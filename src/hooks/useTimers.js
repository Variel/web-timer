import { useState, useCallback } from "preact/hooks";

const useTimers = () => {
  const [timers, setTimers] = useState([
    {
      isRunning: false,
      isPaused: false,
      duration: null,
      elapsedTime: null,
      intervalId: null,
      name: "",
    },
  ]);

  const addTimer = useCallback(() => {
    setTimers((timers) => [
      ...timers,
      {
        isRunning: false,
        isPaused: false,
        duration: null,
        elapsedTime: null,
        intervalId: null,
        name: "",
      },
    ]);
  }, []);

  const updateTimer = useCallback((index, timer) => {
    setTimers((timers) => {
      const newTimers = [...timers];
      timers.splice(index, 1, timer);

      return newTimers;
    });
  }, []);

  const startTimer = useCallback((index) => {
    setTimers((timers) => {
      const newTimers = [...timers];
      timers.splice(index, 1, { ...timer });

      return newTimers;
    });
  }, []);

  const pauseTimer = useCallback((index) => {
    setTimers((timers) => {
      const newTimers = [...timers];
      timers.splice(index, 1, { ...timer, isPaused: true });

      return newTimers;
    });
  }, []);

  return { timers, addTimer, updateTimer, startTimer, pauseTimer };
};

export default useTimers;
