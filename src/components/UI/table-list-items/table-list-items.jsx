import classes from "./table-list-items.module.scss";
import { v4 as uuidv4 } from 'uuid';
import TableElement from "../table-element/table-element";
import ModalInfo from "../modal/modal-info";
import ModalDetails from "../modal/modal-details";
import Button from "../button/button";
import { SET_OPEN_MODAL } from "../../../actions/actions";
import { SET_MODAL_INFO } from "../../../actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function TableListItems({ data }) {
  let i = 1; //for the list numbering :)

  const DISPATCH = useDispatch();

  const MODAL_STATE = useSelector(state => state.MODAL_SETTING.setting);
  const MODAL_INFO = useSelector(state => state.MODAL_INFO.data);

  const SET_MODAL_STATE = (value) => {
    DISPATCH(SET_OPEN_MODAL(value));
  }

  const ADD_MODAL_INFO = (array, id) => {
    const res = array.find(item => id === item.ID);
    DISPATCH(SET_MODAL_INFO(res));
  }

  return (
    <div className={classes.list_wrapper}>
      {data.map(elem => {
        return (
          <TableElement
            key={uuidv4()}
            customClassName={[classes.table_item, classes.item_second_column]}
            firstColumnValue={i++}
            secondColumnValue={elem.Country}
            thirdColumnValue={elem.TotalConfirmed}
            onSetModal={() => { ADD_MODAL_INFO(data, elem.ID); SET_MODAL_STATE(true) }}>
          </TableElement>
        )
      })}
      <ModalInfo
        visible={MODAL_STATE} >
        <ModalDetails
          country={MODAL_INFO.Country}
          total={MODAL_INFO.TotalConfirmed}
          deaths={MODAL_INFO.TotalDeaths}
          recovered={MODAL_INFO.TotalRecovered}
        />
        <Button
          customClassName={classes.modal_button}
          actionFunc={() => SET_MODAL_STATE(false)}>
          OK
        </Button>
      </ModalInfo>
    </div>
  )
}