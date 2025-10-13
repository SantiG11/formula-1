import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export type SectionTitleProps = {
  link: string;
  children: React.ReactNode;
};

export default function NameLink({ link, children }: SectionTitleProps) {
  return (
    <Button
      variant="link"
      className="cursor-pointer text-white p-2 text-wrap whitespace-break-spaces text-start"
    >
      <Link to={link}>{children}</Link>
    </Button>
  );
}
