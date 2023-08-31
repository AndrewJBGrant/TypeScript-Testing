import { useRef, useState } from "react";

//interface DemoProps {}

export default function Demo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      Count: {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
