import { useState, useEffect } from "react";

const TimerWithCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000ms = 1s

    return () => {
      clearInterval(interval); // cleanup effect when the component unmount.
    };
  }, []);

  return (
    <section>
      <p>Count: {count}</p>
    </section>
  );
};

export default TimerWithCleanup;
