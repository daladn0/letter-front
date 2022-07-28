// eslint-disable-next-line no-unused-vars
import { object, string, required, email, min, nax, ref, oneOf } from "yup";

export const loginFields = [
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

export const loginValidationSchema = object({
  email: string().required("Email is required").email("Invalid email"),
  password: string()
    .required("Password is required")
    .min(6, "Password should have at least 6 chars")
    .max(54, "Password should not be longer than 54 chars"),
});


export const signupFields = [
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
  {
    label: "Confirm password",
    name: "confirmPassword",
    as: "input",
    placeholder: "********",
    type: "password",
    model: "",
  },
];

export const signupValidationSchema = object({
  email: string().required("Email is required").email("Invalid email"),
  password: string()
    .required("Password is required")
    .min(6, "Password should have at least 6 chars")
    .max(54, "Password should not be longer than 54 chars"),
  confirmPassword: string().required('Confirm your password').oneOf([ref('password'), null], 'Passwords must match')
});
