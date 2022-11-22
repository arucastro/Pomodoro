import { zeroLeft } from "./zero-left";

export function secondsToTimeHours(secs: number): string {
  const min = zeroLeft((secs / 60) % 60);
  const sec = zeroLeft((secs % 60) % 60);
  const hours = zeroLeft(secs / 3600);
  return `${hours}:${min}:${sec}`;
}
