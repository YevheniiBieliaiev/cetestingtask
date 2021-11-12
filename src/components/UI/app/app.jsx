import classes from "./app.module.scss"
import PageContentWrapper from "../page-content-wrapper/page-content-wrapper";

export default function App() {
  return (
    <div>
      <PageContentWrapper customClassName={classes.page_wrapper} />
    </div>
  )
}

