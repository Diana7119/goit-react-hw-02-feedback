import styles from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(el => {
        return (
          <li key={el}>
            <button
              name={el}
              className={styles.listItemBtn}
              onClick={onLeaveFeedback}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
