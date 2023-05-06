import styles from '../../styles/Home.module.scss';
import ReactMarkdown from 'react-markdown';
import Transition from '../../components/transition';

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
            <div>
                <h1>{currentPost.title}</h1>
                <ReactMarkdown>{currentPost.blogbody}</ReactMarkdown>
            </div>
        </Transition>
    )
}
