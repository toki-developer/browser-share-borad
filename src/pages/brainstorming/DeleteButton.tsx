import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import {
  useBranistorming_DeleteAllOpinionMutation,
  useBranistorming_DeleteDisableOpinionMutation,
} from "src/apollo/graphql";

export const DeleteButton = () => {
  const router = useRouter();
  const [deleteAllOpinion] = useBranistorming_DeleteAllOpinionMutation();
  const [deleteDisableOpinion] =
    useBranistorming_DeleteDisableOpinionMutation();
  const handleDeleteAll = useCallback(() => {
    deleteAllOpinion({
      variables: { borad_id: (router.query.id as string) ?? "" },
    });
  }, [deleteAllOpinion, router.query.id]);
  const handleDeleteDisable = useCallback(() => {
    deleteDisableOpinion({
      variables: { borad_id: (router.query.id as string) ?? "" },
    });
  }, [deleteDisableOpinion, router.query.id]);
  return (
    <div className="py-4 px-6 bg-gray-300 rounded-3xl fixed right-8 bottom-8">
      <button onClick={handleDeleteDisable} className="">
        削除済みアイテムをボードから取り除く
      </button>
      <button onClick={handleDeleteAll} className="ml-6">
        ボード上のアイテムを全て取り除く
      </button>
    </div>
  );
};

gql`
  mutation Branistorming_DeleteAllOpinion($borad_id: String!) {
    delete_branistorming_opinions(where: { borad_id: { _eq: $borad_id } }) {
      returning {
        ...Opinions
      }
    }
  }
  mutation Branistorming_DeleteDisableOpinion($borad_id: String!) {
    delete_branistorming_opinions(
      where: { borad_id: { _eq: $borad_id }, disable_flag: { _eq: 1 } }
    ) {
      returning {
        ...Opinions
      }
    }
  }
`;
