import fs from "fs";
import path from "path";
import Link from "next/link";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import styles from "../../styles/Blog.module.css";

import { Button, CodeBlock } from "../../components";

const components = {
  Button({ children }) {
    return <Button>{children}</Button>;
  },
  pre: ({ children }) => <CodeBlock {...children.props} />,
};

const PostPage = ({ mdxSource }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{mdxSource.scope.title}</h1>
      <div className={styles.date}>{mdxSource.scope.date}</div>
      <img className={styles.coverImage} src={mdxSource.scope.cover_image} />
      <div className="markdown-body">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </main>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, { scope: frontMatter });

  return {
    props: {
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
