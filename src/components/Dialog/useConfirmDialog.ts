import { useCallback, useState } from "react";

export const useConfirmDialog = (okFunc: any, variables: any) => {
  const [isShowConfirmDialog, setIsShowConfirmDialog] =
    useState<boolean>(false);
  const handleClickOk = useCallback(() => {
    okFunc({ variables });
    setIsShowConfirmDialog(false);
  }, [okFunc, variables]);
  const handleShowDialog = useCallback(() => {
    setIsShowConfirmDialog(true);
  }, []);
  const handleHideDialog = useCallback(() => {
    setIsShowConfirmDialog(false);
  }, []);
  return {
    isShowConfirmDialog,
    handleClickOk,
    handleShowDialog,
    handleHideDialog,
  };
};
