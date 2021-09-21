import { customAlphabet } from "nanoid";
import { useCreateBoradMutation } from "src/apollo/graphql";

export const useCreateBorad = () => {
  const [createBoradMutation] = useCreateBoradMutation();
  const createBorad = async () => {
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      20
    );
    const pageId = nanoid();
    const { data } = await createBoradMutation({ variables: { id: pageId } });
    return data?.insert_borad_one?.id;
  };
  return { createBorad };
};
