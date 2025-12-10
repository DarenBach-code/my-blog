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
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
