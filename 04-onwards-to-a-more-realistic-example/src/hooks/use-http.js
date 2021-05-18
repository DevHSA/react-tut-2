import { useState, useCallback } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("HOOK CALLED");
  
  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          header: requestConfig.header ? requestConfig.header : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );
      console.log("INSIDE SEND REQUEST", response)
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[applyData])

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
