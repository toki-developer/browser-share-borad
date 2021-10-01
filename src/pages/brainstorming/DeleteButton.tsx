import { gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import {
  useBranistorming_DeleteAllOpinionMutation,
  useBranistorming_DeleteDisableOpinionMutation,
} from "src/apollo/graphql";
import { ConfirmDialog } from "src/components/Dialog";
import { useConfirmDialog } from "src/components/Dialog/useConfirmDialog";

export const DeleteButton = () => {
  const router = useRouter();
  const [deleteAllOpinion] = useBranistorming_DeleteAllOpinionMutation();
  const [deleteDisableOpinion] =
    useBranistorming_DeleteDisableOpinionMutation();

  const {
    isShowConfirmDialog: isShowDeleteDisableDialog,
    handleClickOk: handleDeleteDisable,
    handleShowDialog: handleShowDeleteDisableDialog,
    handleHideDialog: handleHideDeleteDisableDialog,
  } = useConfirmDialog(deleteDisableOpinion, {
    borad_id: (router.query.id as string) ?? "",
  });

  const {
    isShowConfirmDialog: isShowDeleteAllDialog,
    handleClickOk: handleDeleteAll,
    handleShowDialog: handleShowDeleteAllDialog,
    handleHideDialog: handleHideDeleteAllDialog,
  } = useConfirmDialog(deleteAllOpinion, {
    borad_id: (router.query.id as string) ?? "",
  });

  return (
    <>
      <div className="py-4 px-6 bg-gray-300 rounded-3xl fixed right-8 bottom-8">
        <button
          onClick={handleShowDeleteDisableDialog}
          className="hover:text-blue-500 font-bold border-b-2 hover:border-blue-500 border-gray-300"
        >
          削除済みアイテムをボードから取り除く
        </button>
        <button
          onClick={handleShowDeleteAllDialog}
          className="ml-6 hover:text-blue-500 font-bold border-b-2 hover:border-blue-500 border-gray-300"
        >
          ボード上のアイテムを全て取り除く
        </button>
      </div>
      <ConfirmDialog
        show={isShowDeleteDisableDialog}
        onClose={handleHideDeleteDisableDialog}
        onClickOk={handleDeleteDisable}
        title="削除済みアイテムをボードから取り除く"
        description="復元できませんがよろしいですか？"
      />
      <ConfirmDialog
        show={isShowDeleteAllDialog}
        onClose={handleHideDeleteAllDialog}
        onClickOk={handleDeleteAll}
        title="ボード上のアイテムを全て取り除く"
        description="復元できませんがよろしいですか？"
      />
    </>
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
