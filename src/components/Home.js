import React from "react";
import { useNav } from "../nav-context";

export function Home() {
  const { setShowMenu } = useNav();

  return (
    <div
      className="container"
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <h1>This is Home!</h1>
    </div>
  );
}
