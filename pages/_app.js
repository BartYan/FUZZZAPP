import '../styles/globals.scss'
import styles from '../styles/Home.module.scss';
import { Provider } from 'react-redux';
import { AnimatePresence } from "framer-motion";

import { store } from '../store';

function MyApp({ Component, pageProps, router }) {
  return (

    <Provider store={store}>
        <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
      {/* <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              fuzzzapp footer
            </a>
      </footer> */}
        </AnimatePresence>
    </Provider>

  )
}

export default MyApp
