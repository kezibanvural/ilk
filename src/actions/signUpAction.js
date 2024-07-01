"use server";
import { convertFormDataToJson, getYupErrors, response } from "@/helpers/formValidation";
import { register } from "@/services/sign-up-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

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
        .matches(/[a-z]/, "Password must contain at least one lowercaseletter.")
        .matches(/[A-Z]/, "Password must contain at least one uppercaseletter.")
        .matches(/[.,?/\\\-]/, "Password must contain at least one specialcharacter (., ?, -, /).")
        .required("Required"),
    privacyPolicy:Yup.string()
        .required("You must agree before signing up.")
});

export const signUpMainAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)

    try {
        FormSchemaMain.validateSync(fields, { abortEarly:false });

    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
		throw (err);
    }
    revalidatePath("/sign-up");
	redirect(`/sign-up?email=${fields.email}`);
}

export const signUpPageAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)

    try {
        FormSchemaPage.validateSync(fields, { abortEarly:false });
        const res = await register(fields);
        const data = await res.json();     
        console.log("data",data);
        if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
		throw (err);
    }
    revalidatePath("/sign-in");
	redirect(`/sign-in?email=${fields.email}`);
}