// pages/_app.js
import '../styles/globals.css'; // Ensure this is added to your _app.js file
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // You can also add this here if you need more JS logic.
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
