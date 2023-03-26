import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
// import withTransition from "../HOC/withTransition";
import Transition from '../components/transition';
import Nav from '../components/nav/nav';
import Explorer from '../components/nav/explorer';
import BlogCard from '../components/blog/BlogCard';
import Footer from '../components/layout/footer';

// const URL = process.env.STRAPIBASEURL; //can use in res but error

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
  const {data} = await res.json(); //blogposts is visible from deconstruvtion data

  return {
    props: data,
  };
}

const Blog = ({blogposts}) => {
    console.log('blogposts', blogposts);
    const posts = blogposts.data;

    return (
      <Transition>
        <main className={styles.blog}>
          <Head>
              <title>Fuzzzapp - it's more then play</title>
              <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <Nav/>
              <div className={styles.blog__posts}>
                  {
                      posts &&
                      posts.map((post, index) => {
                          return (
                              <BlogCard post={post} key={index}/>
                          )
                      })
                  }
              </div>
              <Explorer/>
              <Footer/>
          </main>
        </main>
      </Transition>
    )
}
// export default withTransition(Blog);
export default Blog;