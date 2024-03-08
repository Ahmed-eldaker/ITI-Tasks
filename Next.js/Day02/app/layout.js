import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-3xl font-semibold">
              Home
            </Link>
            <Link href="/shop" className="text-white text-3xl font-semibold">
              Shop
            </Link>
          </div>
        </nav>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
