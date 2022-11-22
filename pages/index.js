import fs from "fs";
import Head from "next/head";

import matter from "gray-matter";

import styles from "../styles/Home.module.css";

import { Post } from "../components";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Nextone - Yazılımcı ve Geliştiricilerin Bilgi Platformu</title>
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: fs.readdirSync("posts").map((filename) => {
        const slug = filename.replace(".mdx", "");
        const { data: frontMatter } = matter.read(`posts/${filename}`);

        return {
          slug,
          ...frontMatter,
        };
      }),
    },
  };
}
