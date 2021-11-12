import {
  TYPE_COUNTRIES_DATA,
  TYPE_OPEN_MODAL,
  TYPE_MODAL_INFO,
  TYPE_GET_SEARCH_VALUE,
  TYPE_SORTING_COUNTRIES_DATA
} from "../constants/constants";

const GET_COUNTRIES_DATA = (data) => ({
  type: TYPE_COUNTRIES_DATA,
  dataList: data
})

const SET_OPEN_MODAL = (value) => ({
  type: TYPE_OPEN_MODAL,
  modalState: value
})

const SET_MODAL_INFO = (data) => ({
  type: TYPE_MODAL_INFO,
  modalInfo: data
})

const SEARCH_VALUE = (value) => ({
  type: TYPE_GET_SEARCH_VALUE,
  text: value
})

const SORTING_COUNTRIES_DATA = (value) => ({
  type: TYPE_SORTING_COUNTRIES_DATA,
  sorting: value
})

export {
  GET_COUNTRIES_DATA,
  SET_OPEN_MODAL,
  SET_MODAL_INFO,
  SEARCH_VALUE,
  SORTING_COUNTRIES_DATA
}