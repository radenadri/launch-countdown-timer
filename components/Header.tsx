import React from "react"

interface msgProps {
  message: string
}

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="mx-auto mt-8 text-2xl font-bold text-center md:text-4xl font-redhat text-rose-500">
        {message ? message : "WE'RE LAUNCHING SOON"}
      </h1>
    </header>
  );
}