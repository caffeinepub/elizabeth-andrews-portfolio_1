import { useEffect, useState } from "react";

export function useCounter(
  target: number,
  duration = 1500,
  start = false,
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const frame = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(ease(progress) * target));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(target);
    };

    requestAnimationFrame(frame);
  }, [start, target, duration]);

  return count;
}
