import Head from 'next/head';
// import Script from 'next/script'
import ReactMarkdown from 'react-markdown';

import styles from '../../styles/Home.module.scss';
import Transition from '../../components/transition';
import Nav from '../../components/nav/nav';
import Footer from '../../components/layout/footer';
import Explorer from '../../components/nav/explorer';
import Newsletter from '../../components/layout/newsletter';
import dataPosts from '../api/blog-posts.json';

export async function getStaticProps({params}) {
    const posts = dataPosts.filter(p => p.slug === params.slug)

    return {
        props: {
            currentPost: posts[0],
        }
    };
}
export async function getStaticPaths() {
    const paths = dataPosts.map( post => ({
        params: {slug: post.slug}
    }))

    return {
        paths,
        fallback: false
    };
}

export default function Post({currentPost}) {

    return (
        <Transition>
            <Head>
                <title>Fuzzzapp - it's more then play</title>
                <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
                <link rel="icon" href="/favicon.ico" />
                
                {/* <script async src="/scripts/ml.js"></script>
                <Script src="/scripts/ml.js"/> */}
            </Head>
            <main className={styles.main}>
                <Nav/>
                <div className={styles.post}>
                    
                    <div className={styles.post__categories}>
                    {
                        currentPost.cat &&
                        currentPost.cat.map((cat, index) => {
                            if(cat ==='news') {
                                return (
                                    <span className={styles.bg_grey} key={index}>{cat}</span>
                                )
                            } else if (cat === 'life') {
                                return (
                                    <span className={styles.bg_green} key={index}>{cat}</span>
                                )
                            } else if (cat === 'learn') {
                                return (
                                    <span className={styles.bg_purple} key={index}>{cat}</span>
                                )
                            } else if (cat === 'equip') {
                                return (
                                    <span className={styles.bg_red} key={index}>{cat}</span>
                                )
                            }
                        })
                    }
                    </div>
                    <h1 className={styles.post__title}>#{currentPost.id} {currentPost.title}</h1>
                    <div className={styles.post__body}>
                        <ReactMarkdown>{currentPost.blogbody}</ReactMarkdown>
                    </div>
                </div>
                <Explorer/>
                {/* <Newsletter/> */}
                <Footer/>
            </main>
        </Transition>
    )
}
