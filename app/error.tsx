"use client";
import Image from "next/image";
import NavBar from "./components/Navbar";
import GoBackButton from "./components/404/GoBackButton";

export default function Custom500() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] text-center lg:flex-row">
        <Image
          src="/500.png"
          priority
          alt="500 internal server error image"
          width={550}
          height={350}
        />
        <div>
          <h1 className="font-exo text-3xl font-semibold">
            500 - Internal Server Error
          </h1>
          <p className="mt-5 px-3 text-xl">
            Something went wrong on our end. Please try again later.
          </p>
          <GoBackButton />
        </div>
      </main>
    </>
  );
}
