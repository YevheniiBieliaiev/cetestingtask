import classes from "./input-search.module.scss";

export default function InputSearch({ dataFilter }) {
  return (
    <div className={classes.searcher}>
      <span className={classes.icon_search}></span>
      <input
        className={classes.query_input}
        type="text"

        placeholder="Search..."
        onChange={dataFilter}>
      </input>
    </div>
  )
}