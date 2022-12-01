import { useCallback, useState } from "preact/hooks";

const useNotification = () => {
  const [permission, setPermission] = useState(Notification.permission);

  const requestPermission = useCallback(() => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        setPermission(Notification.permission);
      });
    }
  });

  return {
    permission,
    requestPermission,
  };
};

export default useNotification;
