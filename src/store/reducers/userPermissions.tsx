import * as types from "../constants/userPermissions";
import INITIAL_STATE from "../initialState/initialState";

export default (
  state = INITIAL_STATE,
  action: { type: string; isBlockedModalVisible?: boolean }
) => {
  switch (action.type) {
    case types.SET_BLOCKED_MODAL_VISIBLE:
      return {
        ...state,
        isBlockedModalVisible: action.isBlockedModalVisible,
      };
    default:
      return state;
  }
};
