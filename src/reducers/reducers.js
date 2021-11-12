import { combineReducers } from "redux";
import COUNTRIES_LIST from "./country-data-reducer";
import MODAL_SETTING from "./set-modal-reducer";
import MODAL_INFO from "./modal-info-reducer";
import SEARCH_VALUE from "./search-value-reducer";
import SORTING_COUNTRIES_DATA from "./sorting-countries-data-reducer";


const APP_REDUCERS = combineReducers({
  COUNTRIES_LIST,
  MODAL_SETTING,
  MODAL_INFO,
  SEARCH_VALUE,
  SORTING_COUNTRIES_DATA,
})

export default APP_REDUCERS;