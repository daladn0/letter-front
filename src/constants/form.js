// eslint-disable-next-line no-unused-vars
import { object, string, required, email, min, nax } from "yup";

export const authFields = [
  {
    label: "Your email",
    name: "email",
    as: "input",
    placeholder: "example@gmail.com",
    type: "email",
    model: "",
  },
  {
    label: "Your password",
    name: "password",
    as: "input",
    placeholder: "********",
    type: "password",
    model: "",
  },
];

export const authValidationSchema = object({
  email: string().required("Email is required").email("Invalid email"),
  password: string()
    .required("Password is required")
    .min(6, "Password should have at least 6 chars")
    .max(54, "Password should not be longer than 54 chars"),
});
