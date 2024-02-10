import React from "react";
import { useFormik } from "formik";
import { todoSchema } from "../schema";

const TodoForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    description: "",
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: todoSchema,
    onSubmit: (values, action) => {
      onSubmit(values, action);
    },
  });

  return (
    <form className="bg-slate-500 flex p-3">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="rounded-xl border border-amber-400 w-full md:w-auto"
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <p className="text-white">{errors.name}</p>
          ) : null}
        </div>
        <div className="flex-1">
          <label className="text-white" htmlFor="description">
            Description
          </label>
          <br />
          <input
            className="rounded-xl border border-amber-400 w-full md:w-auto"
            type="text"
            value={values.description}
            name="description"
            onChange={handleChange}
          />
          {errors.description && touched.description ? (
            <p className="text-white">{errors.description}</p>
          ) : null}
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex justify-center items-center mt-4 md:mt-0 text-white bg-amber-400 rounded-3xl px-4 hover:bg-amber-700 duration-300"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
