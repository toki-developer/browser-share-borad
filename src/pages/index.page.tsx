import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { LoadingIcon } from "src/components/LoadingIcon";
import { useCreateBorad } from "src/utils/hooks/useCreateBorad";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { createBorad } = useCreateBorad();
  const handleClick = async () => {
    setIsLoading(true);
    const id = await createBorad();
    router.push(`brainstorming/${id}`);
  };
  if (isLoading) {
    return <LoadingIcon isCenter />;
  }
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
