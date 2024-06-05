import React, { useEffect } from "react";

import { ConfigProvider } from "antd";

import AppRouter from "./router";
import theme from "./theme.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  // const isPanel = useMatch('/panel/*');
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  useEffect(() => {
    console.log("called effect");
    if (isAuthenticated === true) {
      navigate("/panel/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <ConfigProvider theme={theme}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
