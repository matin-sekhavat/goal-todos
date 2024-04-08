import { type ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
  mode: "hint" | "warn";
};
function InfoBox({ children, mode }: InfoBoxProps) {
  // flexible component also include warning
  // default version of this component is in warn mode
  if (mode === "hint") {
    return (
      <aside>
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside>
      {mode === "warn" ? <p>Warn</p> : null}
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
