import type { ReactNode } from "react";

export type GridProps = {
  children: ReactNode;
  cardMinW?: string;
};

export default function Grid({ children, cardMinW = "250px" }: GridProps) {
  return (
    <div
      className="grid gap-5 my-4"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${cardMinW}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
