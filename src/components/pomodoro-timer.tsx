import React, { useState } from "react";
import useInterval from "../hooks/use-interval";

interface Props {
  defaultPomodoroTime: number;
}

function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div>
      <h1>AQUI FICARÁ O TIMER: {mainTime}</h1>
    </div>
  );
}

export default PomodoroTimer;
