import Link from "next/link";
import Image from "next/image";

import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.post}>
      <div className={styles.cover}>
        <Image
          src={post.cover_image}
          alt={post.title}
          fill
          sizes="(min-width: 1920) 80vw, 60vw"
        />
      </div>
      <div className={styles.date}>{post.date}</div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.summary}>{post.excerpt}</p>
    </Link>
  );
}
