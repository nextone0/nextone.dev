import styles from "./Layout.module.css";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
