import { useState } from "react";
import useInterval from "../hooks/use-interval";
import Timer from "./timer";
import { Button } from "./button";

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text={"Teste"} className={""} />
        <Button text={"Teste"} className={""} />
        <Button text={"Teste"} className={""} />
      </div>
      <div className="details"> 
        <p>Testando detalhes</p>
        <p>Testando detalhes</p>
        <p>Testando detalhes</p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
