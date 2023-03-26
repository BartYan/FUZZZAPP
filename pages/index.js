import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import Transition from '../components/transition';
// import withTransition from '../HOC/withTransition';
import Nav from '../components/nav/nav';
import Explorer from '../components/nav/explorer';
import Hero from '../components/layout/hero';
import About from '../components/layout/about';
import Newsletter from '../components/layout/newsletter';
import Apps from '../components/layout/apps';
import More from '../components/layout/more';
import Footer from '../components/layout/footer';

const Home = () => {
  return (
    <Transition>
      <Head>
        <title>Fuzzzapp - it's more then play</title>
        <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
        <link rel="icon" href="/favicon.ico" />
        
        <script async src="/scripts/ml.js"></script>
        <Script src="/scripts/ml.js"/>
      </Head>

      <main className={styles.main}>
        <Nav/>
        <Explorer/>
        <Hero/>
        <About/>
        <Apps/>
        <Newsletter/>
        <More/>
        <Footer />
      </main>

    </Transition>
  )
}

// export default withTransition(Home);
export default Home;
