import fs from "fs";
import path from "path";
import Link from "next/link";
import { useEffect } from "react";

import { marked } from "marked";
import matter from "gray-matter";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  content,
}) {
  useEffect(() => {
    const pre = document.getElementsByTagName("pre");

    for (let i = 0; i < pre.length; i++) {
      const div = document.createElement("div");
      div.className = "code";
      pre[i].parentNode.insertBefore(div, pre[i]);
      div.appendChild(pre[i]);

      const span = document.createElement("span");
      span.className = "copyBtn";
      span.innerText = "Kopyala";
      pre[i].appendChild(span);

      span.addEventListener("click", function () {
        navigator.clipboard.writeText(pre[i].children[0].innerText);
        span.innerText = "Kopyalandı";

        setTimeout(() => {
          span.innerText = "Kopyala";
        }, 1000);
      });
    }
  }, []);

  return (
    <>
      <Link href="/">
        <a className="backBtn">Geri</a>
      </Link>
      <div className="card">
        <h1 className="card__title">{title}</h1>
        <div className="card__date">{date}</div>
        <img className="card__coverImage" src={cover_image} />
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
