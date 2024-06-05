import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes as BaseRoutes, Navigate, Route } from "react-router-dom";

import { Button, Result } from "antd";
import { getCookie } from "cookies-next";

const LayoutContainer = React.lazy(() => import("./containers/Layout"));
const AuthContainer = React.lazy(() => import("./containers/Auth"));
const NotFoundContainer = React.lazy(() => import("./containers/NotFound"));

const AuthLoginPage = React.lazy(() => import("./pages/Auth/Login"));
const AuthSignupPage = React.lazy(() => import("./pages/Auth/Signup"));
const AuthRegisterPage = React.lazy(() => import("./pages/Auth/Register"));
const DashboardPage = React.lazy(() => import("./pages/Dashboard"));
const CompanyPage = React.lazy(() => import("./pages/Company"));

function ProtectedRoute({ component }) {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  console.log("isAuthenticated", isAuthenticated);
  if (isAuthenticated === false)
    return <Navigate to="/auth/login" replace={true} />;

  return component;
}
function RestrictedRoute({ component }) {
  const isCookiePresent = getCookie("accessToken");
  if (isCookiePresent) return <Navigate to="/panel/dashboard" replace={true} />;
  return component;
}

ProtectedRoute.propTypes = {
  component: PropTypes.object,
};
RestrictedRoute.propTypes = {
  component: PropTypes.object,
};

export default function AppRouter() {
  return (
    <Suspense>
      <BaseRoutes>
        <Route path="/auth" element={<AuthContainer />}>
          <Route
            path=""
            element={<RestrictedRoute component={<AuthLoginPage />} />}
          />

          <Route
            path="login"
            element={<RestrictedRoute component={<AuthLoginPage />} />}
          />
        </Route>

        <Route path="/panel" element={<LayoutContainer />}>
          <Route
            path=""
            element={<Navigate to="/panel/dashboard" replace={true} />}
          />

          <Route
            path="dashboard"
            element={<ProtectedRoute component={<DashboardPage />} />}
            index
          />
          <Route
            path="company"
            element={<ProtectedRoute component={<CompanyPage />} />}
          />

          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            }
          />
        </Route>
        <Route
          path="/"
          element={<RestrictedRoute component={<AuthLoginPage />} />}
        />
        <Route path="*" element={<NotFoundContainer />} />
      </BaseRoutes>
    </Suspense>
  );
}
