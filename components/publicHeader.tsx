import { anton } from "@/lib/fonts";

export default function PublicHeader() {
  return (
    <header className="p-4 border-b-2 border-black">
      <h1 className={`${anton.className} text-2xl tracking-wider`}>The Open Journal</h1>
    </header>
  );
}