import styles from "./YouTube.module.css";

export default function YouTube({ id }) {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${
          id.length === 11 ? id : `&videoseries?list=${id}`
        }`}
        allow="fullscreen"
        className={styles.video}
      ></iframe>
    </div>
  );
}
