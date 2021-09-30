import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import type { VFC } from "react";
import { useForm } from "react-hook-form";
import type { OpinionsFragment } from "src/apollo/graphql";
import { useBranistorming_PostOpinionMutation } from "src/apollo/graphql";
import { ErrorMessage } from "src/components/ErrorMessage";
import { useInteractJS } from "src/utils/hooks/useInteractJS";

export type OpinionForm = Pick<OpinionsFragment, "opinion">;

export const OpinionForm: VFC = () => {
  const interact = useInteractJS();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OpinionForm>();
  const router = useRouter();
  const [postOpinion] = useBranistorming_PostOpinionMutation();
  const handlePostOpinion = handleSubmit((data) => {
    postOpinion({
      variables: {
        borad_id: (router.query.id as string) ?? "",
        opinion: data.opinion,
        user_id: "1",
      },
    });
    setValue("opinion", "");
  });

  return (
    <div
      className="py-6 px-3 w-64 bg-gray-400 rounded-3xl fixed right-0 bottom-"
      ref={interact.ref}
      style={{ ...interact.style }}
    >
      <div className="border flex flex-col rounded-sm">
        <textarea
          {...register("opinion", {
            required: "入力してください。",
            maxLength: { value: 100, message: "100文字以下で入力してください" },
          })}
          rows={4}
          className="border focus:outline-none p-2"
          placeholder="アイデアを入力してください"
        />
        <button
          onClick={handlePostOpinion}
          className="py-1 border bg-blue-600 text-white rounded-b-sm"
        >
          投稿する
        </button>
      </div>
      {errors.opinion?.message && (
        <ErrorMessage message={errors.opinion.message} className="mt-1" />
      )}
    </div>
  );
};

gql`
  mutation Branistorming_PostOpinion(
    $borad_id: String!
    $opinion: String!
    $user_id: String!
  ) {
    insert_branistorming_opinions_one(
      object: { borad_id: $borad_id, opinion: $opinion, user_id: $user_id }
    ) {
      ...Opinions
    }
  }
`;
