import { useRouter } from "next/dist/client/router";
import type { VFC } from "react";
import { useCreateBorad } from "src/utils/hooks/useCreateBorad";

type Props = {
  setIsLoading: (v: boolean) => void;
};

const Usage: VFC = () => {
  return <div>{/* <h2>使い方</h2> */}</div>;
};

export const Brainstorming: VFC<Props> = (props) => {
  const router = useRouter();
  const { createBorad } = useCreateBorad();
  const handleClick = async () => {
    props.setIsLoading(true);
    const id = await createBorad();
    router.push(`brainstorming/${id}`);
  };
  return (
    <div>
      <div className="bg-blue-600 h-48 flex items-center justify-around ">
        <h2 className="text-white text-3xl">
          <span className="text-5xl">ブレインストーミング</span>を始める
        </h2>
        <button
          className="py-1 px-10 rounded-full text-2xl font-bold bg-white "
          onClick={handleClick}
        >
          start
        </button>
      </div>
      <Usage />
    </div>
  );
};
