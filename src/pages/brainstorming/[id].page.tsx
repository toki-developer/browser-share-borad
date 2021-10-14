import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useBrainstorming_PostThemeMutation,
  useBranistorming_GetBoradSubscription,
} from "src/apollo/graphql";
import { ErrorMessage } from "src/components/Error";
import { LoadingIcon } from "src/components/Loading";
import { Layout } from "src/layout";
import { DeleteButton } from "src/pages/brainstorming/DeleteButton";
import { OpinionForm } from "src/pages/brainstorming/OpinionForm";
import { OpinionList } from "src/pages/brainstorming/OpinionList";

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
    setValue,
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

  useEffect(() => {
    setValue("theme", data?.borad_by_pk?.brainstorming_theme ?? "");
  }, [setValue, data?.borad_by_pk?.brainstorming_theme]);

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
      <DeleteButton />
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
`;
