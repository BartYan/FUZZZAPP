import styles from '../../styles/Home.module.scss';
import Link from 'next/link';

export default function BlogCard(props) {
    const { post } = props;

    return (
        <Link href={"/posts/" + post.slug}>
            <a className={styles.blog__card}>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
            </a>
        </Link>
    )
}
