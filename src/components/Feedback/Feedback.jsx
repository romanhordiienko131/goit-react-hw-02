const Feedback = ({ stats, totalFeedback }) => {
  const { good, neutral, bad } = stats;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
