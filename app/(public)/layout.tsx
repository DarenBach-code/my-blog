import "@/app/globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Description here',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <main className="bg-stone-200 md:h-lvh sm:max-md:h-screen sm:max-md:hidden w-screen text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
