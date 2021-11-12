import { TYPE_OPEN_MODAL } from "../constants/constants";

const DEFAULT_SETTING = {
  setting: false
}

const MODAL_SETTING = (state = DEFAULT_SETTING, action) => {
  switch (action.type) {
    case TYPE_OPEN_MODAL:
      return {
        setting: action.modalState
      }
    default:
      return state
  }
}

export default MODAL_SETTING;