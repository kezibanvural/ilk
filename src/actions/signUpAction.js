"use server";
import { convertFormDataToJson, getYupErrors, response } from "@/helpers/formValidation";
import { register } from "@/services/sign-up-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
import jwt from 'jsonwebtoken';

const FormSchemaMain = Yup.object({
    email:Yup.string()
        .email("It must be email address")
        .required("Required"),
});
const FormSchemaPage = Yup.object({
    first_name:Yup.string()
        .min(2,"At least 2 characters.")
        .required("Required"),
    last_name:Yup.string()
        .min(2,"At least 2 characters.")
        .required("Required"),
    student_number:Yup.string()
        .required("Required"),
    post_code:Yup.string()
        .required("Required"),
    address:Yup.string()
        .required("Required"),
    email:Yup.string()
        .email("It must be email address")
        .required("Required"),
    password:Yup.string()
        .min(8, "Password must be at least 8 characters long.")
        .matches(/[a-z]/, "It must contain at least one lowercaseletter.")
        .matches(/[A-Z]/, "It must contain at least one uppercaseletter.")
        .matches(/[.,?/\\\-]/, "It must contain at least one specialcharacter (., ?, -, /).")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password fields don't match")
        .required("Required"),
    privacyPolicy:Yup.string()
        .required("You must agree before signing up.")
});

export const signUpMainAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)
    const secretKey = '7HN5dknVIpsFAfdqgk5KnAX6Jq2ekB3g';

    try {
        FormSchemaMain.validateSync(fields, { abortEarly:false });

        const emailToken = jwt.sign({ email: fields.email }, secretKey, { expiresIn: '1h' });
        if(emailToken) return response(true, "", null, emailToken)
        
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
		throw (err);
    }
}

export const signUpPageAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)

    try {
        FormSchemaPage.validateSync(fields, { abortEarly:false });
        console.log("payload",fields);
        const res = await register(fields);
        const data = await res.json();
        console.log("signupData",data);

        if (res.ok) {
            return response(true, data.email, null, data);
        }
        if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
		throw (err);
    }
}