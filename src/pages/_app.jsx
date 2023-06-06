import { RootLayout } from "@/components";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
