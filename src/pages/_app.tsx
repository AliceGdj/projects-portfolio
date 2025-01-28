import '../styles/global.css';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
