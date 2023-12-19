import * as yup from 'yup';
export const basicSchema = yup.object().shape({
  name: yup.string().required('Name is required*'),
  email: yup
    .string()
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: yup
    .string()
    .required('Password is required*')
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must not exceed 64 characters'),
});
