import Image from "next/image";
import GoBackButton from "./components/404/GoBackButton";

export default function Custom404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] text-center lg:flex-row">
      <Image
        src="/404.png"
        alt="404 page not found images"
        width={550}
        height={350}
      />
      <div>
        <h1 className="font-exo text-3xl font-semibold">
          404 - Page Not Found
        </h1>
        <p className="mt-5 px-3 text-xl">
          The page you&apos;re looking for might have been moved, deleted, or
          doesn&apos;t exist.
        </p>
        <GoBackButton />
      </div>
    </main>
  );
}
