import { TYPE_SORTING_COUNTRIES_DATA } from "../constants/constants";

const DEFAULT_SORT_TYPE = {
  sorting: ""
}

const SORTING_COUNTRIES_DATA = (state = DEFAULT_SORT_TYPE, action) => {
  switch (action.type) {
    case TYPE_SORTING_COUNTRIES_DATA:
      return {
        sorting: action.sorting
      }
    default:
      return state
  }
}

export default SORTING_COUNTRIES_DATA;