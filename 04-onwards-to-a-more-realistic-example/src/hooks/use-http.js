import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("HOOK CALLED");

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    console.log(requestConfig)
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        header: requestConfig.header ? requestConfig.header : {},
        body: requestConfig.body ? requestConfig.body : null,
      });
      console.log("INSIDE SEND REQUEST", response);
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
