import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import type { VFC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { OpinionsFragment } from "src/apollo/graphql";
import {
  useBrainstorming_PostThemeMutation,
  useBranistorming_GetBoradSubscription,
  useBranistorming_PostOpinionMutation,
} from "src/apollo/graphql";
import { ErrorMessage } from "src/components/ErrorMessage";
import { LoadingIcon } from "src/components/LoadingIcon";
import { Layout } from "src/layout";
import { OpinionList } from "src/pages/brainstorming/OpinionList";
import { useInteractJS } from "src/utils/hooks/useInteractJS";

export type OpinionForm = Pick<OpinionsFragment, "opinion">;

const OpinionForm: VFC = () => {
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

const BrainstormingPage = () => {
  const router = useRouter();

  const { data, error } = useBranistorming_GetBoradSubscription({
    variables: { id: (router.query.id as string) ?? "" },
  });

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPosted, setIsPosted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ theme: string }>();
  const [postTheme] = useBrainstorming_PostThemeMutation();
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlurTheme = handleSubmit((input) => {
    const newTheme = input.theme;
    const prevTheme = data?.borad_by_pk?.brainstorming_theme ?? "";
    if (newTheme !== prevTheme) {
      postTheme({
        variables: {
          id: (router.query.id as string) ?? "",
          brainstorming_theme: newTheme,
        },
      }).then(() => {
        setIsPosted(true);
        setTimeout(() => {
          return setIsPosted(false);
        }, 2000);
      });
    }
    setIsFocus(false);
  });

  if (error) return <div>error</div>;
  if (!data?.borad_by_pk) {
    return <LoadingIcon isCenter />;
  }
  return (
    <Layout>
      <label className="text-xl">
        <span>テーマ : </span>
        <input
          {...register("theme", {
            maxLength: { value: 40, message: "40文字以下で入力してください" },
          })}
          className="focus:outline-none p-2 bg-transparent focus:border-blue-600 border-b-2 border-black w-3/5"
          onFocus={handleFocus}
          onBlur={handleBlurTheme}
          defaultValue={data.borad_by_pk.brainstorming_theme ?? ""}
        />
        {isFocus && <span className="text-blue-600 text-sm ml-1">編集中</span>}
        {isPosted && (
          <span className="text-blue-600 text-sm ml-1">更新しました</span>
        )}
      </label>
      {errors.theme?.message && (
        <ErrorMessage message={errors.theme.message} className="mt-1" />
      )}
      <OpinionList opinionList={data.borad_by_pk?.branistorming_opinions} />
      <OpinionForm />
    </Layout>
  );
};

export default BrainstormingPage;

gql`
  subscription Branistorming_GetBorad($id: String!) {
    borad_by_pk(id: $id) {
      id
      connect_num
      delete_date
      delete_flag
      brainstorming_theme
      branistorming_opinions(order_by: { created_at: asc }) {
        ...Opinions
      }
    }
  }
  mutation Brainstorming_PostTheme(
    $id: String!
    $brainstorming_theme: String!
  ) {
    update_borad_by_pk(
      pk_columns: { id: $id }
      _set: { brainstorming_theme: $brainstorming_theme }
    ) {
      brainstorming_theme
    }
  }
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
