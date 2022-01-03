import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { LoginPage } from "pages/login";
import { PasswordPage } from "pages/login/password";
import { SuccessPage } from "pages/login/success";
import { HomePage } from "pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login">
          <Route index element={<LoginPage />} />
          <Route path="password" element={<PasswordPage />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
