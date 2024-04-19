import { type FC, type ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

const Headers: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header className="flex flex-col items-center gap-5">
      <img {...image} />
      {children}
    </header>
  );
};

export default Headers;
