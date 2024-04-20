import { type FC, type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="mt-5 border-2 border-green-500 rounded p-2">
        <p className="flex items-center justify-center p-5">{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`mt-5 border-2 border-red-500 rounded p-2 ${severity}`}>
      <div className="flex flex-col items-center p-2">
        <h2 className="text-red-500">Warning</h2>
        <p>{children}</p>
      </div>
    </aside>
  );
};

export default InfoBox;
