import { useState } from "react";
import useInterval from "../hooks/use-interval";
import Timer from "./timer"
import { Button } from "./button";

interface Props {
  defaultPomodoroTime: number;
}

function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <Timer mainTime={mainTime} />
      <Button text={"Teste"} className={""} />
    </div>
  );
}

export default PomodoroTimer;
