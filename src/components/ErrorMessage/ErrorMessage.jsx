
import css from "./ErrorMessage.module.css";


function ErrorMessage({ message }) {

  return(
    <p className={css.error}>{message}</p>
  )
}

export default ErrorMessage;
