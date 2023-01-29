import '../styles/globals.scss'
import styles from '../styles/Home.module.scss';
import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
    <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            fuzzzapp footer
          </a>
    </footer>
  </Provider>
  )
}

export default MyApp
