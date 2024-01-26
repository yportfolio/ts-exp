import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";
import Editor from "./components/Editor";

export default function Page(): JSX.Element {
  return (
    <main>
      <Editor />

      <Button>Save or continue edit</Button>
    </main>
  );
}
