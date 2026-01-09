import { anton } from "@/lib/fonts";
import { Signup, Login } from "@/components/signup-and-login-buttons/bothButtons";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="p-4 border-b-2 border-black">
        <nav className="flex justify-between items-center px-0.5 md:px-8 lg:px-16">
          <h1 className={`${anton.className} text-lg tracking-wider md:text-3xl`}>The Open Journal</h1>
          <div className="flex gap-2 md:gap-4">
            <Signup />
            <Login />
          </div>
        </nav>
      </header>
      <section className="relative w-screen h-[calc(100vh-73px)] overflow-hidden">
        <Image 
          src="/landing-page-design.svg" 
          alt="Homepage Image" 
          fill
          className="object-cover scale-100 sm:max-md:scale-130 md:scale-110 lg:scale-150"
          priority
        />
      </section>
    </>
  );
}