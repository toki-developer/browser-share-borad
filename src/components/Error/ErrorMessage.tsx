import type { VFC } from "react";

type Props = {
  message: string;
  className?: string;
};

export const ErrorMessage: VFC<Props> = (props) => {
  return (
    <p className={`text-red-500 text-sm ${props.className}`}>
      ※ {props.message}
    </p>
  );
};
