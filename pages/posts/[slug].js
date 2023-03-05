import styles from '../../styles/Home.module.scss';

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
    console.log('posts', posts);
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

export default function Post({title, description}) {

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
