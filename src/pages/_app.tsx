import '../styles/global.css';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
export default MyApp
