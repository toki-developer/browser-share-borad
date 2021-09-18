import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

const BrainstormingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1 className="bg-red-400 text-black">{id}</h1>
    </div>
  );
};

export default BrainstormingPage;

gql`
  query Branistorming_GetBorad($id: String!) {
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
