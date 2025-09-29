export type TableContainerProps = {
  children: React.ReactNode;
};

export default function TableContainer({ children }: TableContainerProps) {
  return (
    <div className="border rounded-xl overflow-hidden w-full ">{children}</div>
  );
}
