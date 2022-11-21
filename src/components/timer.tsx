import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  mainTime: number;
}

export default function timer(props: Props) {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
