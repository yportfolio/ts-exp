"use client";

import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page(): JSX.Element {
  const router = useRouter();

  const onCreate = async () => {
    router.push(`/documents/${1}`);
  };
  return (
    <main>
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
          src="/empty.png"
          height="300"
          width="300"
          alt="Empty"
          className="dark:hidden"
        />
        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="Empty"
          className="hidden dark:block"
        />
        <h2 className="text-lg font-medium">Welcome</h2>
        <Button onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a note
        </Button>
      </div>
    </main>
  );
}
