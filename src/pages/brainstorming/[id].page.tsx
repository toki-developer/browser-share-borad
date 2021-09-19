import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useBranistorming_GetBoradSubscription } from "src/apollo/graphql";
import { Layout } from "src/layout";

const BrainstormingPage = () => {
  const router = useRouter();
  const { data, error } = useBranistorming_GetBoradSubscription({
    variables: { id: (router.query.id as string) ?? "" },
  });
  if (error) return <div>error</div>;
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Layout>
      <h1 className="bg-red-400 text-black">{data.borad_by_pk?.connect_num}</h1>
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
      created_at
      updated_at
    }
  }
`;
