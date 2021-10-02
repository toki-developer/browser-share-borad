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
      <div className="flex">
        <div className="flex-1 pl-20 text-gray-700 bg-blue-50">
          <h2 className="text-5xl font-bold mt-36">ブレインストーミング</h2>
          <p className="text-lg mt-12 font-semibold mb-36">
            ログイン不要。URL共有のみでブレインストーミング。
            <br />
            zoomでの軽い意見だしやアイスブレイクなどにご利用できます。
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button
            className="py-2 px-16 rounded-md text-2xl shadow-xl text-white bg-blue-500 flex items-center hover:shadow-none hover:text-gray-200"
            onClick={handleClick}
          >
            はじめる
          </button>
        </div>
      </div>
      <Usage />
    </div>
  );
};
