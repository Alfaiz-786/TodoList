import * as Yup from "yup";

export const todoSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .max(10, "max limit 10 character"),
  description: Yup.string()
    .required("description is required")
    .max(25, "max limit 25 character"),
});
