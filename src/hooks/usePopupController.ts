import { useEffect, useRef, useState } from "react";

export default function usePopupController() {
  const [isOpenedWindow, setIsOpenedWindow] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const popupController = (e: MouseEvent) => {
    if (windowRef.current) {
      const path = e.composedPath();
      if (path[0] === windowRef.current) {
        setIsOpenedWindow(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", popupController);
    return () => {
      document.addEventListener("click", popupController);
    };
  }, []);
    
  return [isOpenedWindow, setIsOpenedWindow, windowRef] as const
}
