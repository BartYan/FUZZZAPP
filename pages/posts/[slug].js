// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from '../../styles/Home.module.scss';
import ReactMarkdown from 'react-markdown';
import Transition from '../../components/transition';

export async function getStaticPaths() {
    const fetchParams = {
        method: "POST", //post because graphql
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            query: `
            {
                blogposts{
                  data{
                    attributes{
                      slug
                    }
                  }
                }
              }
            `
        })
    }
    const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
    const posts = await res.json();
    // console.log('posts', posts);
    const paths = posts.data.blogposts.data.map((post)=>{
        return { params: { slug: post.attributes.slug }}
    })
    return {
        paths: paths,
        fallback: true
    };
}

export async function getStaticProps(params) {

    const fetchParams = {
        method: "POST", //post because graphql
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            query: `

            query {
                blogposts(filters:{slug:{eq:"${params.params.slug}"}}) {
                    data {
                        attributes {
                            title
                            description
                            blogbody
                            slug
                        }
                    }
                }
            }

            `
        })
    }
    const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
    const {data} = await res.json();

    return {
        props: data.blogposts.data[0].attributes
    };
}

export default function Post({title, blogbody}) {
// console.log(title, blogbody)
    return (
        <Transition>
            <div>
                <h1>{title}</h1>
                <ReactMarkdown>{blogbody}</ReactMarkdown>
            </div>
        </Transition>
    )
}
