import React, { ReactNode } from "react";
function Highlight({ children }: { children: ReactNode }) {
  return (
    <span style={{ color: "red", backgroundColor: "yellow" }}>{children}</span>
  );
}

export default Highlight;
