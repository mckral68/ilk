"use client";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { useFormState } from "react-dom";
import { createMessage } from "@/app/lib/actions";
import { Messages } from "@/app/lib/definitions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Form({ messages }: { messages: Messages[] }) {
  const initialState = { message: "", errors: {} };
  const router = useRouter();
  const [state, dispatch] = useFormState(createMessage, initialState);
  const answers = [
    { id: 1, value: "Hayatımda biri var." },
    { id: 2, value: "Hayatımda biri yok,yine de istemiyorum." },
    { id: 3, value: "Sınavdan sonra konuşabiliz." },
  ];
  useEffect(() => {
    state.message === "success"
      ? (alert("Mesaj başarıyla iletildi"), router.push("/"))
      : "";
  }, [state, router]);
  return (
    <form action={dispatch}>
      <div className="rounded-md p-4 md:p-6">
        {/* Answer */}
        <div className="mb-4 ">
          <label htmlFor="answer" className="mb-2 block text-sm font-medium">
            Cevap seç
          </label>
          <div className="relative">
            <select
              id="answer"
              name="answer"
              className="peer block text-black w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 "
              aria-describedby="answer-error"
            >
              <option value="" disabled>
                Bir cevap seç
              </option>
              {answers.map((m) => (
                <option key={m.id} value={m.value}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
          <div id="answer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.answer &&
              state.errors.answer.map((error: string) => (
                <p className="mt-2 text-sm text-red-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Invoice message */}
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Mesajını gir
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Lütfen mesajını gir"
                className="peer block w-full text-black rounded-md border  border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="message-error"
              />
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
              {state.errors?.message &&
                state.errors.message.map((error: string) => (
                  <p className="mt-2 text-sm text-red-200" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Vazgeç
        </Link>
        <Button type="submit">Gönder</Button>
      </div>
    </form>
  );
}
