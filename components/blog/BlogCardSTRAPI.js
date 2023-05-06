import styles from '../../styles/Home.module.scss';
import Link from 'next/link';

export default function BlogCard(props) {
    const { post } = props;

    console.log('post props', post)
    return (
        <Link href={"/posts/" + post.attributes.slug}>
            <a className={styles.blog__card}>
                <h3>{post.attributes.title}</h3>
                <p>{post.attributes.description}</p>
            </a>
        </Link>
    )
}
