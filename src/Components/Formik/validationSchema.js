import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().required(),
  age: Yup.string().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
});
