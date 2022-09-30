import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().min(6,"6 digit min").required(),
  email: Yup.string().email().required(),
  age: Yup.number().required(),
  phone: Yup.number().required(),
  address: Yup.string().required(),
});
export const loginValidationSchema = Yup.object({
  username:Yup.string().required(),
  password:Yup.string().required()
})