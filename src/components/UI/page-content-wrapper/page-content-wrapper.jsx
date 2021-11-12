import classes from "./page-content-wrapper.module.scss";
import Header from "../header/header";
import TableWrapper from "../table-wrapper/table-wrapper";

export default function PageContentWrapper({ customClassName }) {
  return (
    <div className={`${customClassName} ${classes.page_wrapper}`}>
      <Header />
      <TableWrapper />

    </div>
  )
}