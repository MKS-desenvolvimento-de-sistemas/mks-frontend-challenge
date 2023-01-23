// NEXT IMPORT'S
import type { AppProps } from "next/app";

// REDUX IMPORT'S
import { Provider } from "react-redux";
import store from "../redux";

// COMPONENTS IMPORT'S
import { Global } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global>
        <Component {...pageProps} />
      </Global>
    </Provider>
  );
};

export default MyApp;
