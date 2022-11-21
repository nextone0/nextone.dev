import Link from "next/link";

import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.post}>
      <img src={post.cover_image} className={styles.img} />
      <div className={styles.date}>{post.date}</div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.summary}>{post.excerpt}</p>
    </Link>
  );
}
