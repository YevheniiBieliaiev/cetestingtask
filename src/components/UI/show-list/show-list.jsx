import classes from "./show-list.module.scss";
import Button from "../button/button";

export default function ShowList({ actionFunc }) {
  return (
    <div className={classes.show_list}>
      <div className={classes.button_label}>
        <span>PRESS THE BUTTON TO SEE COUNTRY INFORMATION</span>
      </div>
      <Button
        customClassName={classes.show_button}
        actionFunc={actionFunc}
      >
        SHOW
      </Button>
    </div>
  )
}