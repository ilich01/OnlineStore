import type { AppProps } from "next/app";
import React from "react";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../public/fonts/fonts.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div id="root">
        <Head>
          <link
            rel="icon"
            href="/icons/images/headLogo.png"
            type="image/x-icon"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
