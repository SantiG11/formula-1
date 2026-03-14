import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="shrink-0 inline-flex h-12 items-center justify-center rounded-md  bg-accent pr-3 mx-2 mr-6 shadow-xs"
      aria-label="Go to home"
    >
      <img
        src="/f1-logo-trimmed.png"
        alt="Formula 1 logo"
        className="h-6 w-32 object-contain"
      />
    </Link>
  );
}
