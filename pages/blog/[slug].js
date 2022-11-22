import fs from "fs";
import Head from "next/head";
import Image from "next/image";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";

//
// More on rehype plugins and remark plugins here: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
//

import styles from "../../styles/Blog.module.css";

import { CodeBlock } from "../../components";

export default function Post({ frontMatter, mdxSource }) {
  const components = {
    pre: ({ children }) => <CodeBlock {...children.props} />,
  };

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta property="og:description" content={frontMatter.excerpt} />
        <meta name="twitter:image" content={frontMatter.cover_image} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <div className={styles.date}>{frontMatter.date}</div>
        <div className={styles.coverImage}>
          <Image
            src={frontMatter.cover_image}
            alt={frontMatter.title}
            fill
            sizes="(min-width: 1920) 80vw, 60vw"
            placeholder="blur"
            blurDataURL={frontMatter.cover_image}
          />
        </div>
        <div
          className="markdown-body"
          style={{ margin: "12px", backgroundColor: "inherit" }}
        >
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: fs.readdirSync("posts").map((file) => ({
      params: { slug: file.replace(".mdx", "") },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: frontMatter, content } = matter.read(`posts/${slug}.mdx`);
  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
}
