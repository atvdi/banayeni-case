export const combineClasses = (...classes: (string | undefined | null)[]) =>
  [...classes].map(className => className ?? "").join(" ");
