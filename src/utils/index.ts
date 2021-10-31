import { useState, useEffect } from "react";
export const isFalsy = (val: any) => (val === 0 ? false : !val);

export const cleanObject = <T>(obj: { [key: string]: T }) => {
  const results = { ...obj };
  Object.keys(results).forEach((key) => {
    const val = obj[key];
    if (isFalsy(val)) {
      delete results[key];
    }
  });
  return results;
};

export const useDebounce = <T>(params: T, delay: number = 500) => {
  const [debounceVal, setDebounceVal] = useState(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(params);
    }, delay);
    return () => clearTimeout(timer);
  }, [params, delay]);

  return debounceVal;
};
