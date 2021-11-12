import { TYPE_GET_SEARCH_VALUE } from "../constants/constants";

const DEFAULT_SEARCH_VALUE = {
  text: ""
}

const SEARCH_VALUE = (state = DEFAULT_SEARCH_VALUE, action) => {
  switch (action.type) {
    case TYPE_GET_SEARCH_VALUE:
      return {
        text: action.text
      }
    default:
      return state
  }
}

export default SEARCH_VALUE;