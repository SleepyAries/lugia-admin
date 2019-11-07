import React, { Component } from "react";
import { createRoute, Redirect } from "@lugia/lugiax-router";

import styled from "styled-components";
import Pages from "./pages";

export const firstRouter = {
  "/register/register": {
    exact: true,
    render: async () => import("./register/register")
  },
  "/register/registerSuccess": {
    exact: true,
    render: async () => import("./register/registerSuccess")
  },
  "/login": {
    exact: true,
    render: async () => import("./login")
  },
  "/404": {
    render: async () => import("./pages/abnormal/404")
  },
  "/403": {
    render: async () => import("./pages/abnormal/403")
  },
  "/500": {
    render: async () => import("./pages/abnormal/500")
  },
  "/": {
    // exact: true,
    component: Pages
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            path: "/404"
          }}
        />
      );
    }
  },

};

export default () => {
  return (
    <React.Fragment>
      {createRoute(firstRouter)}
    </React.Fragment>
  );
};
