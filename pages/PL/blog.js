import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import styles from '../../styles/Home.module.scss';
// import withTransition from "../HOC/withTransition";
import Transition from '../../components/transition';
import Nav from '../../components/nav/nav';
import Explorer from '../../components/nav/explorer';
import BlogCard from '../../components/blog/BlogCard';
import Footer from '../../components/layout/footer';
import dataPosts from './api/blog-posts.json';

const Blog = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(dataPosts);
    }, [])

    return (
      <Transition>
        <Head>
            <title>Fuzzzapp - it's more then play</title>
            <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.blog}>

            {/* <span className={styles.blog__bg}>BLOG</span> */}
            <main className={styles.main}>
                <Nav/>
                
                <div className={styles.blog__posts}>
                    <h1 className={styles.blog__title}><span>01.</span> Fuzzzapp Blog</h1>
                    <div className={styles.blog__posts_content}>
                    {
                        posts &&
                        posts.map((post, index) => {
                            return (
                                <BlogCard post={post} key={index}/>
                            )
                        })
                    }
                    </div>
                    
                </div>
                <Explorer/>
                <Footer/>
            </main>
        </section>
      </Transition>
    )
}
// export default withTransition(Blog);
export default Blog;