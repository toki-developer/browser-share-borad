import type { VFC } from "react";
import { useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import type { OpinionsFragment } from "src/apollo/graphql";
import { useInteractJS } from "src/utils/hooks/useInteractJS";

type OptionItem = {
  item: OpinionsFragment;
};

type Props = {
  opinionList: OpinionsFragment[];
};

const OptionItem: VFC<OptionItem> = (props) => {
  const interact = useInteractJS();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ opinio: string }>();
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleEdited = handleSubmit((data) => {
    if (props.item.opinio == data.opinio) {
      console.log("==");
    }
    setIsEdit(false);
  });

  return (
    <div
      className="border inline-block w-52 p-2 pt-4 shadow-sm bg-white rounded-sm text-left relative ml-2 group"
      ref={interact.ref}
      style={{ ...interact.style }}
    >
      <div className="absolute top-0 right-0 text-gray-100 group-hover:text-gray-400 flex items-center">
        {isEdit ? (
          <span className="text-xs text-blue-600">編集中</span>
        ) : (
          <button onClick={handleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        )}

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isEdit ? (
        <div className="text-right">
          <textarea
            {...register("opinio", {
              required: "入力してください。",
              maxLength: {
                value: 100,
                message: "100文字以下で入力してください",
              },
            })}
            defaultValue={props.item.opinio}
            className="focus:outline-none w-full "
          />
          <button
            className="text-xs bg-blue-600 rounded-xl text-white py-1 px-2"
            onClick={handleEdited}
          >
            編集終了
          </button>
        </div>
      ) : (
        <p>{props.item.opinio}</p>
      )}
    </div>
  );
};

export const OpinionList: VFC<Props> = (props) => {
  return (
    <div className="flex flex-wrap">
      {props.opinionList.map((item) => {
        return <OptionItem item={item} key={item.id} />;
      })}
    </div>
  );
};
