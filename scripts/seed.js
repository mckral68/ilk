const { db } = require("@vercel/postgres");
const { messages } = require("../src/app/lib/placeholder-data");
const bcrypt = require("bcrypt");

async function seedMessages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "message" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        answer VARCHAR(255) NOT NULL,
        message VARCHAR(255) NOT NULL,
  
      );
    `;
    console.log(`Created "messages" table`);
    // Insert data into the "message" table
    const insertedMessages = await Promise.all(
      messages.map(async (message) => {
        return client.sql`
        INSERT INTO messages (id,answer,messsage)
        VALUES (${messages.id}, ${messages.message})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedMessages.length} messages`);

    return {
      createTable,
      messages: insertedMessages,
    };
  } catch (error) {
    console.error("Error seeding messages:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedMessages(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
