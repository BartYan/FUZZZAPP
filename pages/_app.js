import '../styles/globals.scss'
import { Provider } from 'react-redux';
import { AnimatePresence } from "framer-motion";

import { store } from '../store';

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
    </Provider>
  )
}

export default MyApp