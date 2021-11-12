import classes from "./modal-details.module.scss";
import totalIco from "./ico/confirmed-ico.svg";
import deathsIco from "./ico/deaths-ico.svg";
import recoveredIco from "./ico/recovered-ico.svg";

export default function ModalDetails({ country, total, deaths, recovered }) {
  return (
    <div className={classes.modal_info_wrapper}>
      <div className={classes.country_name}>{country}</div>

      <div className={classes.details_container}>
        <div>
          <img className={classes.total_ico} src={totalIco} alt="total" />
        </div>
        <div className={classes.row_name}>
          <span>Total Confirmed</span>
        </div>
        <div className={classes.row_total_ammount}>
          {total}
        </div>
      </div>

      <div className={classes.details_container}>
        <div>
          <img className={classes.total_ico} src={deathsIco} alt="total" />
        </div>
        <div className={classes.row_name}>
          <span>Total Deaths</span>
        </div>
        <div className={classes.row_total_ammount}>
          {deaths}
        </div>
      </div>

      <div className={classes.details_container}>
        <div>
          <img className={classes.total_ico} src={recoveredIco} alt="total" />
        </div>
        <div className={classes.row_name}>
          <span>Total Recovered</span>
        </div>
        <div className={classes.row_total_ammount}>
          {recovered}
        </div>
      </div>
    </div>
  )
}