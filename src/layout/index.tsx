import type { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  fullScreen?: boolean;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className={`bg-gray-100 min-h-screen ${!props.fullScreen && "p-4"}`}>
      {props.children}
    </div>
  );
};
