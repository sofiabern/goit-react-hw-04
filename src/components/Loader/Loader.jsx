import { Hearts } from "react-loader-spinner";

import css from "./Loader.module.css";

function Loader() {
  return (
    <Hearts
      height="80px"
      width="80px"
      color="#e61341"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
}

export default Loader;
