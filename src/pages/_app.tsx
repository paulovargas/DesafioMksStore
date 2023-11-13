// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ReactQueryProvider } from '../react-query';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
