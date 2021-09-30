import { gql } from "@apollo/client";
import { useState } from "react";
import { LoadingIcon } from "src/components/Loading";
import { Brainstorming } from "src/pages/root/Brainstorming";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  if (isLoading) {
    return <LoadingIcon isCenter />;
  }
  return (
    <div>
      <Brainstorming setIsLoading={setIsLoading} />
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
