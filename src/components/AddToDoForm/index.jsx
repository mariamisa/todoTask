import React from "react";
import { Formik } from "formik";

const AddToDoForm = ({ addNewTodo }) => (
  <div>
    <Formik
      initialValues={{ task: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.task) {
          errors.task = "Required";
        }
        return errors;
      }}
      onSubmit={({ task }, { setSubmitting, resetForm }) => {
        addNewTodo(task);
        resetForm({ task: "" });
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="flex items-end mb-3">
          <div className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
            <input
              type="task"
              name="task"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.task}
              className="rounded-full border-2 border-rose-600"
              placeholder="todo"
              style={{
                backgroundColor: "#ddd",
                padding: "10px",
                borderRadius: "10px",
              }}
            />
            {errors.task && touched.task && errors.task}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded bg-slate-400 hover:bg-slate-500 text-slate-100"
              style={{
                backgroundColor: "blue",
                color:'white',
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              add todo
            </button>{" "}
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default AddToDoForm;
