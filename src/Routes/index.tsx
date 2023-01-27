import { Route, Routes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
