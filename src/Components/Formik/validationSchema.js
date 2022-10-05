import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().min(6, "6 digit min").required(),
  email: Yup.string().email().required(),
  age: Yup.number().required(),
  phone: Yup.number().required(),
  address: Yup.string().required(),
});
export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Mail no valido").required("Campo Requerido"),
  password: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
});
export const checkOutValidationSchema=Yup.object({
  
})