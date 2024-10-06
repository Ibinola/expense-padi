import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required("Email Address Required"),
    password: Yup.string('At least 1 Uppercase Letter & 1 Special character').required("Password Required"),

})


