import { useEffect, useState, useCallback } from "react";
import useInterval from "../hooks/use-interval";
import Timer from "./timer";
import { Button } from "./button";

// @ts-ignore to
import bellStart from "../assets/sounds/bell-start.mp3";
// @ts-ignore to
import bellFinish from "../assets/sounds/bell-finish.mp3";
import { secondsToTime } from "../utils/seconds-to-time";
import { secondsToTimeHours } from "../utils/seconds-to-time-hours";

const audioStart = new Audio(bellStart);
const audioFinish = new Audio(bellFinish);

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
  const [cyclesMngr, setCyclesMngr] = useState(
    new Array(props.cycles - 1).fill(true)
  );

  const [cyclesDone, setCyclesDone] = useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = useState(0);
  const [pomodorosDone, setPomodorosDone] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setTotalWorkingTime (totalWorkingTime + 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.defaultPomodoroTime);
    audioStart.play();
  }, [setTimeCounting, setWorking, setResting, setMainTime, props.defaultPomodoroTime]);

  const configureRest = useCallback( (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
    audioFinish.play();
  },[setTimeCounting, setWorking, setResting, setMainTime, props.longRestTime, props.shortRestTime]);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");

    if (mainTime > 0) return;

    if (working && cyclesMngr.length > 0) {
      configureRest(false);
      cyclesMngr.pop();
    } else if (working && cyclesMngr.length <= 0) {
      configureRest(true);
      setCyclesMngr(new Array(props.cycles - 1).fill(true));
      setCyclesDone(cyclesDone + 1);
    }

    if (working) setPomodorosDone(pomodorosDone + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    configureRest,
    configureWork,
    setCyclesDone,
    cyclesMngr,
    pomodorosDone,
    props.cycles,
    cyclesDone,
  ]);

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
        <Button
          text={"Rest"}
          onClick={() => configureRest(false)}
          className={!working && !resting ? "hidden" : ""}
        />
        <Button
          text={timeCounting ? "Pause" : "Return"}
          onClick={() => setTimeCounting(!timeCounting)}
          className={""}
        />
      </div>
      <div className="details">
        <p>Cycles done: {cyclesDone}</p>
        <p>Working time: {secondsToTimeHours(totalWorkingTime)}</p>
        <p>Pomodoros: {pomodorosDone} </p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
