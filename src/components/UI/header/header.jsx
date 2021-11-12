import classes from "./header.module.scss";
import LogoBlock from "../logo-block/logo-block";
import InputSearch from "../input-search/input-search";
import ShowList from "../show-list/show-list";
import { getTotalData } from "../../../services/covid-stat-service";
import { useDispatch } from "react-redux";
import { GET_COUNTRIES_DATA, SEARCH_VALUE } from "../../../actions/actions";

export default function Header() {

  const DISPATCH = useDispatch();

  const FETCH_COUNTRIES_LIST = async () => {
    const { data: { Countries } } = await getTotalData();
    DISPATCH(GET_COUNTRIES_DATA(Countries));
  }

  const GET_SEARCH_VALUE = (value) => {
    DISPATCH(SEARCH_VALUE(value))
  }

  return (
    <div className={classes.header_wrapper}>
      <LogoBlock />
      <InputSearch
        dataFilter={(event) => GET_SEARCH_VALUE(event.target.value)} />
      <ShowList actionFunc={FETCH_COUNTRIES_LIST} />
    </div>

  )
}