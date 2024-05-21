import { Hearts } from "react-loader-spinner";

import css from "./Loader.module.css";

function Loader() {
  return (
    <Hearts
      className={css.loader}
      height="80px"
      width="80px"
      color="#e61341"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
