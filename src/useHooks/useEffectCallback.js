import { useRef, useEffect, useCallback } from 'react';

const useEffectCallback = (fn, dependencies) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const { current } = ref;
    if (current) {
      current(); // 通过ref.current访问最新的回调函数
    }
  }, [ref]);
};

export default useEffectCallback;
