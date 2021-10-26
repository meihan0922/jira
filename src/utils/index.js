import { useState, useEffect } from "react";
export const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObject = (obj) => {
  const results = { ...obj };
  Object.keys(results).forEach((key) => {
    const val = obj[key];
    if (isFalsy(val)) {
      delete results[key];
    }
  });
  return results;
};

export const useDebounce = ({ params, delay }) => {
  const [debounceVal, setDebounceVal] = useState(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(params);
    }, delay);
    return () => clearTimeout(timer);
  }, [params, delay]);

  return debounceVal;
};
