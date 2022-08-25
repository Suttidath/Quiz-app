import React, { useContext } from "react";
import { Datacontext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
  const { score, setAppState, setScore } = useContext(Datacontext);

  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };
  return (
    <div className="score">
      <h1>สรุปผลคะแนนสอบ</h1>
      <h2>
        {score} / {QuestionsData.length}
      </h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  );
};

export default Score;
