export type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
      {children}
    </div>
  );
}
