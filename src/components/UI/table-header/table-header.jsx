import classes from "./table-header.module.scss";
import TableElement from "../table-element/table-element";
import Button from "../button/button";

export default function TableHeader() {
  
  return (
    <TableElement
      customClassName={[classes.table_header, classes.header_second_column]}
      firstColumnValue="№"
      secondColumnValue="Country"
      thirdColumnValue="Total Confirmed">
        <Button>Sort country</Button>
        <Button>Sort total</Button>
    </TableElement>
  )
}