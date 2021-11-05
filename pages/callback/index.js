import { useCounter, useCustomCompareEffect } from 'react-use';
import isEqual from 'react-fast-compare';

const Demo = () => {
  const [count, { inc }] = useCounter(0);
  const options = { step: 23 };

  useCustomCompareEffect(
    () => {
      inc(options.step);
    },
    [options],
    (prevDeps, nextDeps) => isEqual(prevDeps, nextDeps)
  );

  return (
    <div>
      <p>useCustomCompareEffect with deep comparison: {count}</p>
    </div>
  );
};

export default Demo;
