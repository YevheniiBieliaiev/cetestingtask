import classes from "./modal-info.module.scss";

function ModalInfo({ visible, children }) {
  const rootClasses = [classes.modal__wrapper];
  if (visible) {
    rootClasses.push(classes.open);
  }
  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

export default ModalInfo;