import '@/styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RootLayout from '@/components/RootLayout';
import { persistor, store } from '@/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} />
      <div className="font-bodyFont bg-gray-300">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </Provider>
  );
}
