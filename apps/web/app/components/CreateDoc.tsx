"use client";

import { Button } from "@repo/ui/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
export default function CreateDoc() {
  const router = useRouter();

  const onCreate = async () => {
    router.push(`/documents/${1}`);
  };
  return (
    <Button onClick={onCreate}>
      <PlusCircle className="h-4 w-4 mr-2" />
      Create a note
    </Button>
  );
}
