import classes from "./logo-block.module.scss";
import covidLogo from "./logo.png";

export default function LogoBlock() {
  return (
    <div className={classes.logo_block_wrapper}>
      <div>
        <img className={classes.logo} src={covidLogo} alt="Covid Logo" />
      </div>
      <div className={classes.logo_add_text}>
        <span>STATISTIC</span>
      </div>
    </div>
  )
}