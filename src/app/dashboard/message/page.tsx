import { CreateMessage } from "@/app/ui/messages/buttons";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`text-2xl`}>Mesajlar</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <CreateMessage  />
        </div>

      </div>
    </div>
  );
};

export default Page;
