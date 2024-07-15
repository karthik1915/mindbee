"use server";
import {
  DynamoDBClient,
  PutItemCommand,
  AttributeValue,
} from "@aws-sdk/client-dynamodb";

export interface FormData {
  form_type: "main_form" | "course_form" | "internship_form" | "review_form";
  form_name: string;
  name: string;
  email: string;
  mobile: string;
  message?: string;
  get_updates: boolean;
}

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function postData(formData: FormData) {
  const params = {
    TableName: "mindbee",
    Item: {
      form_type: { S: formData.form_type },
      form_name: { S: formData.form_name },
      name: { S: formData.name },
      email: { S: formData.email },
      mobile: { S: formData.mobile },
      created_at: { S: new Date().toISOString() },
      get_updates: { BOOL: formData.get_updates },
      is_contacted: { BOOL: false },
      //
      ...(formData.message && { message: { S: formData.message } }),
    } as { [key: string]: AttributeValue },
  };

  try {
    await client.send(new PutItemCommand(params));
    return { success: true, message: "Data posted successfully" };
  } catch (err) {
    console.error("Error posting data:", err);
    return { success: false, message: "Internal Server Error" };
  }
}
