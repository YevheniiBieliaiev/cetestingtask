import TableHeader from "../table-header/table-header";
import TableListItems from "../table-list-items/table-list-items";
import Sorting from "../sort-block/sort-block";
import { dataSorting } from "../../../services/data-sorting-service";
import { SORTING_COUNTRIES_DATA } from "../../../actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function TableWrapper() {
  const DISPATCH = useDispatch();

  const SEARCH_VALUE = useSelector(state => state.SEARCH_VALUE.text);

  const COUNTRIES_TYPE_SORT = useSelector(state => state.SORTING_COUNTRIES_DATA.sorting);

  const COUNTRIES_DATA = useSelector(state => {
    let sorted = [...state.COUNTRIES_LIST.data];

    if (COUNTRIES_TYPE_SORT) {
      sorted = dataSorting(sorted, COUNTRIES_TYPE_SORT);
    }
    sorted = sorted.filter(elem => elem.Country.toLowerCase().includes(SEARCH_VALUE.toLowerCase()));
    return sorted
  });

  const SORT_COUNTRIES_TYPE = (value) => {
    DISPATCH(SORTING_COUNTRIES_DATA(value));
  }


  return (
    <>
      <Sorting
        sortCountriesUp={() => SORT_COUNTRIES_TYPE("up")}
        sortCountriesDown={() => SORT_COUNTRIES_TYPE("down")}
        sortConfirmedUp={() => SORT_COUNTRIES_TYPE("higher")}
        sortConfirmedDown={() => SORT_COUNTRIES_TYPE("lower")}
      />
      <TableHeader />
      <TableListItems data={COUNTRIES_DATA} />
    </>
  )
}