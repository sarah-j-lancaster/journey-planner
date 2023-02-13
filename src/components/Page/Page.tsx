import styles from "./page.module.scss";
type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  const blobRight = (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="698"
      height="589"
      fill="none"
      className={styles.right}
    >
      <path
        fill="#EEF2FD"
        fillRule="evenodd"
        d="M25.86 445.64c-38.43-56.76-29.04-136.78-3.95-200.57 23.77-60.44 85.22-92.16 135.34-133.48C208.3 69.5 251.7-9.6 316.87 1.94c68.53 12.15 64.86 126.54 125.75 160.26 70.63 39.1 183.3-25.11 233.11 38.42 45.77 58.37 10.88 155.97-35.03 214.22-42.03 53.33-128.28 33.22-186.95 67.4-44.92 26.18-58.28 97.7-109.7 105.45-51.55 7.79-88.83-47.04-136.44-68.3-61.2-27.31-144.18-18.25-181.75-73.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const blobLeft = (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="610"
      height="529"
      fill="none"
      className={styles.left}
    >
      <path
        fill="#EEF2FD"
        fillRule="evenodd"
        d="M19 298c-68.5-144 70-102.96 115.5-138 37.92-29.2 28.1-101.5 88.83-150.5C291.5-23 352.42 38.52 397.59 37c58.9-2 91.03-54.72 125.32-6.79 34.49 48.2 21.43 91.92 31.68 150.29 13.54 77.1 89.28 177.51 35.96 234.82C533.17 477 445.2 524.72 361.04 528.5 313.86 530.6 269 470 223.33 458 177.88 446.06 71.36 461.6 38 428.5c-42.42-42.1 26-52-19-130.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const blobRightBottom = (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="586"
      height="577"
      fill="none"
      className={styles["right-bottom"]}
    >
      <path
        fill="#EEF2FD"
        fillRule="evenodd"
        d="M439.9 536.02c-41.5 31.66-96.3 45.92-147.92 38.12-50.23-7.59-82.51-52.65-125.67-79.45-55.46-34.44-144.06-37.25-162.93-99.74-18.6-61.58 59.85-109.13 81.59-169.67 24.18-67.35-4.1-158.6 52.16-202.84 55.85-43.92 137.46-10.8 207.94-1.72 67.87 8.75 145.3 4.37 193.04 53.4 47.03 48.3 51.78 124.76 45.8 191.9-4.91 55.1-49.64 94.31-75.67 143.12-23.18 43.45-29.19 97.01-68.34 126.88Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {blobLeft}
        {blobRight}
        {blobRightBottom}
      </div>
      {children}
    </div>
  );
};
