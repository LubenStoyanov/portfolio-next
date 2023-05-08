import { ReactNode } from "react";
import { Linebreaker } from "windups";

export default function LineBreaker({
  children,
  fontStyle,
  width,
}: {
  children: ReactNode;
  fontStyle: string;
  width: number;
}) {
  return (
    <Linebreaker fontStyle={fontStyle} width={width}>
      {children}
    </Linebreaker>
  );
}
