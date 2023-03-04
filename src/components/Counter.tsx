import { FC, useState } from "react";

import styles from './Counter.module.scss';

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <div>
      <h2 className={styles.h2}>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;