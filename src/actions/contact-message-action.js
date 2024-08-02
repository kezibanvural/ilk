"use server";
import * as Yup from "yup";
import {
    convertFormDataToJson,
    getYupErrors,
    response,
  } from "@/helpers/formValidation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  export const createMessageAction = async (prevState, formData) => {
    try {
      const fields = convertFormDataToJson(formData);
  
      FormSchema.validateSync(fields, { abortEarly: false });
  
    //   const res = await createMessage(fields);
    //   const data = await res.json();
    //   console.log(data);
    //   if(res.ok){
    //     return response(true, data?.message, data?.validations);
    //   }
    //   if (!res.ok) {
    //     return response(false, "", data?.validations);
    //   }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return getYupErrors(err.inner);
      }
  
      throw err;
    }
  };