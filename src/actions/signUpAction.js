"use server";
import { convertFormDataToJson, getYupErrors, response } from "@/helpers/formValidation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchemaMain = Yup.object({
    email:Yup.string()
        .email("It must be email address")
        .required("Required"),
});

export const signUpMainAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)

    // try {
    //     FormSchema.validateSync(fields, { abortEarly:false });

    //     const res = await register(fields);
    //     const data = await res.json();     
    //     if (!res.ok) {
	// 		return response(false, data?.message, data?.validations);
	// 	}

    // } catch (err) {
    //     if (err instanceof Yup.ValidationError) {
	// 		return getYupErrors(err.inner);
	// 	}
    //     // satir eklendi
	// 	throw (err);
    // }
    revalidatePath("/sign-up");
	redirect(`/sign-up?email=${fields.email}`);
}