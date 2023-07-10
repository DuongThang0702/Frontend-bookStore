import { useState, useEffect } from "react";

const useDebounce = (value: string, ms: number) => {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, ms);
    return () => clearTimeout(setTimeoutId);
  }, [value, ms]);
  return debounceValue;
};

export default useDebounce;
