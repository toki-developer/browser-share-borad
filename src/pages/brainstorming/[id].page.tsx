import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import type { VFC } from "react";
import { useForm } from "react-hook-form";
import {
  useBranistorming_GetBoradSubscription,
  useBranistorming_PostOpinionMutation,
} from "src/apollo/graphql";
import { ErrorMessage } from "src/components/ErrorMessage";
import { Layout } from "src/layout";
import { OpinionList } from "src/pages/brainstorming/OpinionList";

const OpinionForm: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<{ opinio: string }>();
  const router = useRouter();
  const [postOpinion] = useBranistorming_PostOpinionMutation();
  const handlePostOpinion = handleSubmit((data) => {
    postOpinion({
      variables: {
        borad_id: (router.query.id as string) ?? "",
        opinio: data.opinio,
        user_id: "1",
      },
    });
    setValue("opinio", "");
  });
  return (
    <div className="fixed top-3 right-3">
      <div className="border flex flex-col w-52 rounded-sm">
        <textarea
          {...register("opinio", {
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
      {errors.opinio?.message && (
        <ErrorMessage message={errors.opinio.message} className="mt-1" />
      )}
    </div>
  );
};

const BrainstormingPage = () => {
  const router = useRouter();
  const { data, error } = useBranistorming_GetBoradSubscription({
    variables: { id: (router.query.id as string) ?? "" },
  });
  if (error) return <div>error</div>;
  if (!data?.borad_by_pk) {
    return <div>loading...</div>;
  }
  return (
    <Layout>
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
      branistorming_opinions {
        ...Opinions
      }
    }
  }
  mutation Branistorming_PostOpinion(
    $borad_id: String!
    $opinio: String!
    $user_id: String!
  ) {
    insert_branistorming_opinions_one(
      object: { borad_id: $borad_id, opinio: $opinio, user_id: $user_id }
    ) {
      id
      opinio
      borad_id
      user_id
    }
  }
`;
gql`
  fragment Opinions on branistorming_opinions {
    id
    opinio
    user_id
  }
`;
// TODO:OpimionListの方でfragmentを定義する
