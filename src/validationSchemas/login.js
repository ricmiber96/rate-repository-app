import * as yup from "yup";

export const loginValidatonSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .min(5,'Too short password!')
        .max(1000, 'Too long password!')
        .required('Password is required')

})