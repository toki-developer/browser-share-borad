import type { VFC } from "react";
import type { OpinionsFragment } from "src/apollo/graphql";

type Props = {
  opinionList: OpinionsFragment[];
};

export const OpinionList: VFC<Props> = (props) => {
  return (
    <div>
      {props.opinionList.map((item) => {
        return (
          <div
            key={item.id}
            className="border inline-block w-52 p-2 shadow-sm bg-white rounded-sm"
          >
            <p>{item.opinio}</p>
          </div>
        );
      })}
    </div>
  );
};
