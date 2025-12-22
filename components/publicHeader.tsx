import { anton } from "@/lib/fonts";
import { Signup, Login } from "@/components/signup-and-login-buttons/bothButtons";

export default function PublicHeader() {
  return (
    <header className="p-4 border-b-2 border-black">
      <nav className="flex justify-between items-center px-18">
        <h1 className={`${anton.className} text-2xl tracking-wider`}>The Open Journal</h1>
        <div className="flex gap-4">
          <Signup />
          <Login />
        </div>
      </nav>
    </header>
  );
}