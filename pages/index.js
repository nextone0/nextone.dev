import fs from "fs";
import path from "path";
import Head from "next/head";

import matter from "gray-matter";

import styles from "../styles/Home.module.css";

import { Post } from "../components";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Nextone</title>
      </Head>

      <div className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
