import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <svg
              className={styles.svg}
              width="44"
              height="21"
              viewBox="0 0 44 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10.5C2 15.1927 5.91786 19 10.75 19C17.7143 19 22 10.5 22 10.5C22 10.5 26.2857 2 33.25 2C38.0821 2 42 5.80729 42 10.5M2 10.5C2 5.80729 5.91786 2 10.75 2M2 10.5H6M42 10.5C42 15.1927 38.0821 19 33.25 19M42 10.5H38M15.0909 6.34043H17.6364L26.3636 15.0213H28.9091"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.brand}>Nextone</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
