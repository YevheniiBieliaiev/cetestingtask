import { TYPE_MODAL_INFO } from "../constants/constants";

const DEFAULT_MODAL_INFO = {
  data: {
    Country: "",
    TotalConfirmed: "",
    TotalDeaths: "",
    TotalRecovered: ""
  }
}

const MODAL_INFO = (state = DEFAULT_MODAL_INFO, action) => {
  switch (action.type) {
    case TYPE_MODAL_INFO:
      return {
        data: action.modalInfo
      }
    default:
      return state
  }
}

export default MODAL_INFO;