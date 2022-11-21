export function secondsToTime(secs: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, "0");
  const min = zeroLeft((secs / 60) % 60);
  const sec = zeroLeft((secs % 60) % 60);
  return `${min}:${sec}`;
}
