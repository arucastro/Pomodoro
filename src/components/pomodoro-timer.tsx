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
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
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
    setResting(false);
    setMainTime(props.defaultPomodoroTime);
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if(long) {
        setMainTime(props.longRestTime);
    } else{
        setMainTime(props.shortRestTime);
    }
    
  };

  return (
    <div className="pomodoro">
      <h2>You are: {working ? "Working" : "Resting"}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={"Start!"}
          onClick={() => configureWork()}
          className={""}
        />
        <Button text={"Rest"} onClick={()=>configureRest(false)} className={!working && !resting ? "hidden" : ""} />
        <Button
          text={timeCounting ? "Pause" : "Return"}
          onClick={() => setTimeCounting(!timeCounting)}
          className={""}
        />
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
