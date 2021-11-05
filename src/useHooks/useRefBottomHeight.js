import { useRef, useState, useEffect } from 'react';

// deps 放一個初始空陣列
export const useRefBottomHeight = (deps = []) => {
  const [height, setHeight] = useState({});
  const myRef = useRef();

  useEffect(() => {
    if (myRef.current) {
      const { offsetHeight } = myRef.current;
      const { top } = myRef.current.getBoundingClientRect();
      setHeight(`calc(${window.innerHeight - top - offsetHeight}px)`);
    }
  }, deps);

  return [height, myRef];
};
