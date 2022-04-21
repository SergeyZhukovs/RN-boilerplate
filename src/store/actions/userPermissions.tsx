import * as types from "../constants/userPermissions";

export const setIsBlockedModalVisible = (isBlockedModalVisible: boolean) => ({
  type: types.SET_BLOCKED_MODAL_VISIBLE,
  isBlockedModalVisible,
});
