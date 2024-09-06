import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification ";
import "./App.css";

function App() {
  const [stats, setStats] = useState(() => {
    const savedStats = localStorage.getItem("stats");

    if (savedStats !== null) {
      return JSON.parse(savedStats);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const updateFeedback = (feedbackType) => {
    setStats((prevStats) => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = stats.good + stats.neutral + stats.bad;

  return (
    <>
      <Description />
      <Options
        handleUpdate={updateFeedback}
        handleReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback stats={stats} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
