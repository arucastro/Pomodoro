import { zeroLeft } from "./zero-left";

export function secondsToTime(secs: number): string {
  const min = zeroLeft((secs / 60) % 60);
  const sec = zeroLeft((secs % 60) % 60);
  return `${min}:${sec}`;
}
