import "@/app/globals.css";
import type { Metadata } from 'next';
import Header from "@/components/publicHeader";

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
        <main className="bg-neutral-300 h-lvh w-screen text-black">
          <Header />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
