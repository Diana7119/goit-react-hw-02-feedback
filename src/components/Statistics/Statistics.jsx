import styles from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={styles.text}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>
        Positive feedback:
        {!positivePercentage ? 0 : Math.round(positivePercentage)} %
      </p>
    </>
  );
};
