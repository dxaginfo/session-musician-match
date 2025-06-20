import { useState, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import theme from '../styles/theme';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Client-side cache for emotion styling
const clientSideEmotionCache = createCache({ key: 'css' });

export default function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  
  // This effect prevents hydration mismatch between server and client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}