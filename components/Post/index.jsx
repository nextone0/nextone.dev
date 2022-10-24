import Link from "next/link";

import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={styles.post}>
        <img className={styles.img} src={post.frontMatter.cover_image} />
        <div className={styles.date}>{post.frontMatter.date}</div>
        <h3 className={styles.title}>{post.frontMatter.title}</h3>
        <p className={styles.summary}>{post.frontMatter.excerpt}</p>
      </div>
    </Link>
  );
};

export default Post;
