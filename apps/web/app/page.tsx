import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";
import Editor from "./components/Editor";
import { ModeToggle } from "./components/ModeToggle";

export default function Page(): JSX.Element {
  return (
    <main>
      <ModeToggle />
      <Editor />

      <Button>Save or continue edit</Button>
    </main>
  );
}
