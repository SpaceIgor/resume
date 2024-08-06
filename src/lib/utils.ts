import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export const isBrowser = () => typeof window !== "undefined";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
