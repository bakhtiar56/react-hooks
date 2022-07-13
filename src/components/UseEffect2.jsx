import { useState, useEffect } from "react";

export default function UseEffect2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("on cleanup");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
