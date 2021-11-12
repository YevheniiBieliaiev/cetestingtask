import { TYPE_COUNTRIES_DATA } from "../constants/constants";

const DEFAULT_COUNTRIES_LIST = {
  data: []
}

const COUNTRIES_LIST = (state = DEFAULT_COUNTRIES_LIST, action) => {
  switch (action.type) {
    case TYPE_COUNTRIES_DATA:
      return {
        data: action.dataList
      }
    default:
      return state
  }
}

export default COUNTRIES_LIST;