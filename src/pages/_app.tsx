import '@/styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RootLayout from '@/components/RootLayout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-bodyFont">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
