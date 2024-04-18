"use client";

import { useState, useEffect } from "react";

const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? "window defined" : "window undefined"}</div>;
};

export default useClient;