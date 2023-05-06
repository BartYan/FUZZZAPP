import styles from '../../styles/Home.module.scss';
import Link from 'next/link';

export default function BlogCard(props) {
    const { post } = props;

    return (
        <Link href={"/posts/" + post.slug}>
            <a className={styles.blog__card}>
                <h3 className={styles.blog__card_head}>#{post.id} {post.title}</h3>
                <p className={styles.blog__card_description}>{post.desc}</p>
                <div className={styles.blog__card_categories}>
                    {
                        post.cat &&
                        post.cat.map((cat, index) => {
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
            </a>
        </Link>
    )
}
