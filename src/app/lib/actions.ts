"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const FormSchema = z.object({
  id: z.string(),
  answer: z.string({ invalid_type_error: "Please select a answer" }),
  message: z.string({ invalid_type_error: "Please select a message" }),
  date: z.string(),
});
export type State = {
  errors?: {
    answer?: string[];
    message?: string[];
  };
  message?: string | null;
};
const CreateMessage = FormSchema.omit({ id: true, date: true });
const UpdateMessage = FormSchema.omit({ id: true, date: true });
export async function createMessage(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateMessage.safeParse({
    answer: formData.get("answer"),
    message: formData.get("message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { answer, message } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO messages (answer, message, date)
      VALUES (${answer}, ${message},  ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Message.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/message");
  redirect("/dashboard/message");
}
export async function updateMessage(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdateMessage.safeParse({
    answer: formData.get("answer"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Message Invoice.",
    };
  }

  const { answer, message } = validatedFields.data;

  try {
    await sql`
      UPDATE invoices
      SET answer = ${answer}, message=${message}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Message." };
  }

  revalidatePath("/dashboard/message");
  redirect("/dashboard/message");
}
export async function deleteMessage(id: string) {
  throw new Error("Failed to Delete Message");
  try {
    await sql`DELETE FROM messages WHERE id = ${id}`;
    revalidatePath("/dashboard/message");
    return { message: "Deleted message." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Message." };
  }
}
