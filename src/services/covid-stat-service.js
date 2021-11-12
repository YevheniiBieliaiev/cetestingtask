import axios from "axios";

const API_BASE = "https://api.covid19api.com/";

const COVID_STAT_AXIOS = axios.create({
  baseURL: API_BASE,
})

function getData(query) {
  return COVID_STAT_AXIOS.get(query, {})
}

function getTotalData() {
  return getData("summary");
}

export {
  getTotalData
}