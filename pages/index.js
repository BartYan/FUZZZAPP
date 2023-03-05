import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import Nav from '../components/nav/nav';
import Explorer from '../components/nav/explorer';
import Hero from '../components/layout/hero';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `
      {
        blogposts{
          data{
            attributes{
              splash{
                data{
                  attributes{
                    url
                  }
                }
              }
              title
              blogbody
              description
              slug
            }
          }
        }
      }`
    })
  }

  const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
  };
}

export default function Home({data}) {
  console.log('data', data)
  return (
    <>
      <Head>
        <title>Fuzzzapp - it's more then play</title>
        <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav/>
        <Hero/>
        <Explorer/>
      </main>
    </>
  )
}
