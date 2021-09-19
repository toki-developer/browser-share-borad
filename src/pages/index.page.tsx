import { gql } from "@apollo/client";
import { customAlphabet } from "nanoid";
import { useRouter } from "next/dist/client/router";
import { useCreateBoradMutation } from "src/apollo/graphql";

const Home = () => {
  const router = useRouter();
  const [createBorad] = useCreateBoradMutation();
  const handleClick = async () => {
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      20
    );
    const pageId = nanoid();
    const { data } = await createBorad({ variables: { id: pageId } });
    router.push(`brainstorming/${data?.insert_borad_one?.id}`);
  };
  return (
    <div>
      <button onClick={handleClick}>ブレインストーミングを始める</button>
    </div>
  );
};

export default Home;

gql`
  mutation CreateBorad($id: String!) {
    insert_borad_one(object: { id: $id }) {
      id
    }
  }
`;
