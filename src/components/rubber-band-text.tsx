import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import type { MouseEvent, HTMLAttributes } from "react";

type RubberBandTextProps = HTMLAttributes<HTMLSpanElement> & {
  text: string;
  delay?: number;
  duration?: number;
};

export const RubberBandText: React.FC<RubberBandTextProps> = ({
  text,
  className,
  duration = 0,
  delay = duration,
  ...props
}) => {
  const [active, setActive] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const activeTimer = setTimeout(() => {
      setActive(false);
    }, duration + delay);

    const hoverTimer = setTimeout(() => {
      setHover(false);
    }, 700);

    return () => {
      clearTimeout(hoverTimer);
      clearTimeout(activeTimer);
    };
  }, [hover, delay, duration]);

  const onMouseEnter = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    setHover(true);
    props.onMouseEnter && onMouseEnter(event);
  };

  return (
    <span
      {...props}
      aria-hidden
      onMouseEnter={onMouseEnter}
      style={{ ...props.style }}
      className={cn(
        "opacity-0 inline-block text-neon",
        !active &&
          "opacity-100 transition-all duration-300 hover:text-white shadow-[1px 1px 2px] shadow-neon",
        !active && hover && "animate-rubber-band",
        active && `animate-rubber-scale delay-[${delay}ms]`,
        className
      )}
    >
      {text}
    </span>
  );
};
