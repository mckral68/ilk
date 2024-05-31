"use server";
import { cookies } from "next/headers";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const FormSchema = z.object({
  id: z.string(),
  answer: z.string({ invalid_type_error: "Lütfen bir cevap seç" }),
  message: z
    .string({ invalid_type_error: "Please select a message" })
    .min(20, "En az 20 karakter"),
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
      message: "Missing Fields. Failed to Create Message.",
    };
  }

  // Prepare data for insertion into the database
  const { answer, message } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO messages (answer, message, date)
      VALUES (${answer}, ${message}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create message.",
    };
  }

  // Revalidate the cache for the Message page and redirect the user.
  revalidatePath("/dashboard/message");
  redirect("/dashboard/message");
}
export async function createCookie(data: any) {
  cookies().set("cevap", data);
}
export async function getCookie(data: string) {
  const cevap = cookies().get(data);
  return cevap;
}
