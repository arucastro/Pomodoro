import { useEffect, useState } from "react";
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
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if(working) document.body.classList.add("working");
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={"Start!"}
          onClick={() => configureWork()}
          className={""}
        />
        <Button text={"Stop!"} className={""} />
        <Button text={timeCounting ? "Pause" : "Return"} onClick={()=>setTimeCounting(!timeCounting)} className={""} />
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
