import classes from "./table-element.default.module.scss"

export default function TableElement({
  customClassName,
  firstColumnValue, secondColumnValue, thirdColumnValue,
  onSetModal
}) {

  const [customElemClassName, customSecondColumnClassName] = customClassName;

  return (
    <div
      className={`${classes.item_element} ${customElemClassName}`}
      onClick={onSetModal}>
      <div className={classes.order}><span>{firstColumnValue}</span></div>
      <div className={`${customSecondColumnClassName} ${classes.country_name}`}>
        <span>{secondColumnValue}</span>
      </div>
      <div className={classes.total}>
        <span>{thirdColumnValue}</span>
      </div>
    </div>
  )
}

TableElement.defaultProps = {
  onSetModal: () => { }
}