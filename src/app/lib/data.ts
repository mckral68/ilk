import { unstable_noStore as noStore } from "next/cache";
import { Messages } from "./definitions";
import { sql } from "@vercel/postgres";

export async function fetchMessages() {
  noStore();
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching message data...");
    const data = await sql<Messages>`SELECT * FROM messages`;
    console.log("Data fetch completed after 0.5 seconds.");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    // throw new Error("Failed to fetch revenue data.");
  }
}
