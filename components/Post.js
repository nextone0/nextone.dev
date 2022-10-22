import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <img className="card__img" src={post.frontmatter.cover_image} />
      <div className="card__date">{post.frontmatter.date}</div>
      <h3 className="card__title">{post.frontmatter.title}</h3>
      <p className="card__excerpt">{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="card__moreBtn">Daha Fazla</a>
      </Link>
    </div>
  );
}
