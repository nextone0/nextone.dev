import fs from "fs";
import Head from "next/head";
import Image from "next/image";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import moment from "moment";

//
// More on rehype plugins and remark plugins here: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
//

import styles from "../../styles/Blog.module.css";

import { CodeBlock, YouTube } from "../../components";

export default function Post({ frontMatter, mdxSource }) {
  const components = {
    YouTube,
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
          <Image src={frontMatter.cover_image} alt={frontMatter.title} fill />
        </div>
        <div className="markdown-body">
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

  return {
    props: {
      frontMatter: {
        ...frontMatter,
        date: moment(frontMatter.date).locale("tr").format("LL"),
      },
      mdxSource: await serialize(content, {
        scope: frontMatter,
        mdxOptions: { remarkPlugins: [remarkGfm] },
      }),
    },
  };
}
