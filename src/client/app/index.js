import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import configureStore from "./redux/store";
import App from "./App";

const store = configureStore(window.PRELOADED_STATE);
const root = <App Router={BrowserRouter} store={store} />;

hydrate(root, document.getElementById("app"));
