import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="scroll-m-20 text-left p-2 text-4xl text-primary font-extrabold tracking-tight text-balance">
        F1
      </h1>
    </Link>
  );
}
