"use server";
import supabase from "@/lib/supabase";

export interface FormData {
  form_type: "main_form" | "course_form" | "internship_form" | "review_form";
  form_name: string;
  name: string;
  email: string;
  mobile: string;
  message?: string;
  get_updates: boolean;
}

export async function postData(formData: FormData) {
  const { error } = await supabase
    .schema("mindbees_consulting")
    .from("contact_forms")
    .insert([
      {
        form_type: formData.form_type,
        form_name: formData.form_name,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        get_updates: formData.get_updates,
        is_contacted: false,
        ...(formData.message && { message: formData.message }),
      },
    ]);

  if (error) {
    console.error("Error posting data:", error);
    return { success: false, message: "Internal Server Error" };
  }

  return { success: true, message: "Data posted successfully" };
}
