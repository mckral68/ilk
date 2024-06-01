import { CreateMessage } from "@/app/ui/messages/buttons";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 md:mt-8">
          <CreateMessage />
        </div>
      </div>
    </div>
  );
};

export default Page;
