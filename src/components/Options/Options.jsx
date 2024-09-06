import s from "./Options.module.css";

const Options = ({ handleUpdate, handleReset, totalFeedback }) => {
  return (
    <ul className={s.list}>
      <li>
        <button onClick={() => handleUpdate("good")} type="button">
          Good
        </button>
      </li>
      <li>
        <button onClick={() => handleUpdate("neutral")} type="button">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => handleUpdate("bad")} type="button">
          Bad
        </button>
      </li>
      <li>
        {totalFeedback > 0 && (
          <button onClick={handleReset} type="button">
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
