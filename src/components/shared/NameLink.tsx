import { Link } from "react-router-dom";

export type SectionTitleProps = {
  link: string;
  children: React.ReactNode;
  classes?: string;
};

export default function NameLink({
  link,
  children,
  classes,
}: SectionTitleProps) {
  return (
    <Link
      to={link}
      className={`${classes && classes} text-pretty   leading-normal hover:underline font-semibold `}
    >
      {children}
    </Link>
  );
}
