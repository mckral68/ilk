import { fetchMessages } from "@/app/lib/data";
import Form from "@/app/ui/messages/create-message";

export default async function Page() {
  const messages = await fetchMessages();

  return (
    <main>
      <Form messages={messages!} />
    </main>
  );
}
