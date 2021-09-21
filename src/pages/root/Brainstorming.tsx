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
      <div className="bg-blue-600 h-96 flex items-center justify-around ">
        <h2 className="text-white text-3xl font-bold">
          <span className="text-5xl text-shadow-black-5">
            ブレインストーミング
          </span>
          を始める
        </h2>
        <button
          className="py-1 px-10 rounded-full text-2xl shadow-xl font-bold bg-white flex items-center hover:shadow-none hover:text-gray-600"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          START
        </button>
      </div>
      <Usage />
    </div>
  );
};
