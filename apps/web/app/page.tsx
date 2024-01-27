import Image from "next/image";
import Welcome from "./components/Welcome";
import CreateDoc from "./components/CreateDoc";

export default function Page() {
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

        <Welcome />

        <h2 className="mt-16 mb-4 text-3xl font-semibold text-black">
          What's next?
        </h2>

        <CreateDoc />
      </div>
    </main>
  );
}
