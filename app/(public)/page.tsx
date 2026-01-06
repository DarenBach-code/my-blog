import { anton } from "@/lib/fonts";
import { Signup, Login } from "@/components/signup-and-login-buttons/bothButtons";

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
      <div className="grid grid-cols-2 h-">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            Image
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-bold">Your Bold Text Here</h1>
        </div>
      </div>
    </>
  );
}