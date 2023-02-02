import React from "react";
import { Formik } from "formik";

const AddToDoForm = ({ addNewTodo }) => (
  <div>
    <Formik
      initialValues={{ task: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.task) {
          errors.task = "Please add a todo!!";
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
          <div className="grid gap-4 grid-cols-2 py-4">
            <input
              type="task"
              name="task"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.task}
              className="bg-gray-50 py-2 px-4 border border-gray-300 text-gray-900 rounded-lg"
              placeholder="todo"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-slate-600	bg-slate-600  py-2 px-4 text-white m-0 rounded-lg"
            >
              Add Todo
            </button>
            <span className="text-red-600 px-2 font-semibold">
              {errors.task && touched.task && errors.task}
            </span>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default AddToDoForm;
