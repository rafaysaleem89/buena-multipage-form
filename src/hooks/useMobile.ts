import { useState, useEffect } from "react";

//This hook is used to determine if the user is on a mobile device or not.
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;