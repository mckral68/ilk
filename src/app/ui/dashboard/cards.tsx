import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { fetchMessages } from "@/app/lib/data";
const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const messages = await fetchMessages();
  return (
    <>
      {messages?.map((m) => (
        <div key={m.id} className="flex flex-col items-center gap-2">
          <div
            className="w-full rounded-md bg-blue-300"
            style={{
              height: `100px`,
            }}
          ></div>
          <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
            {m.answer}
          </p>
          <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
            {m.message}
          </p>
        </div>
      ))}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
