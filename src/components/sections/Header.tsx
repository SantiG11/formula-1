import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-gray-700 h-15 flex items-center">{children}</header>
  );
}
