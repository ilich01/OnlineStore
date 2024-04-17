import type { AppProps } from "next/app";
import React from "react";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../public/fonts/fonts.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
