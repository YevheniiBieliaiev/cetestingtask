import classes from "./sort-block.module.scss";
import Button from "../button/button";

export default function Sorting({
  sortCountriesUp,
  sortCountriesDown,
  sortConfirmedUp,
  sortConfirmedDown,
}) {
  return (
    <div className={classes.sort_wrapper}>
      <Button
        actionFunc={sortCountriesUp}
        customClassName={classes.sort_button}>
        SORTING BY COUNTRIES (UP)
      </Button>

      <Button
        actionFunc={sortCountriesDown}
        customClassName={classes.sort_button}>
        SORTING BY COUNTRIES (DOWN)
      </Button>

      <Button
        actionFunc={sortConfirmedUp}
        customClassName={classes.sort_button}>
        SORTING BY CONFIRMED (UP)
      </Button>

      <Button
        actionFunc={sortConfirmedDown}
        customClassName={classes.sort_button}>
        SORTING BY CONFIRMED (DOWN)
      </Button>
    </div>
  )
}

