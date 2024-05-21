import { Field, Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";


function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}

      onSubmit={(values, actions) => {

        if (!values.query) toast.error("Type something in!");

        onSearch(values.query);

        actions.resetForm();
      }}
    >
      <Form className={css.bar}>
        <div className={css["search-container"]}>
          <button type="submit" className={css.button}>
            <CiSearch size={12} />
          </button>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.input}
          />
        </div>
        <Toaster />
      </Form>
    </Formik>
  );
}

export default SearchBar;
