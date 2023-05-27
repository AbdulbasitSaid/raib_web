import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raib Consultants Et'el",
  description: "Premier consultancy firm in Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* nav bar */}
      {/* <div className=" bg-emerald-200">
        <h1>Navbar</h1>
      </div> */}
      <body className={inter.className}>{children}</body>
      <footer className=" bg-green-300">
        <h1>footer</h1>
      </footer>
    </html>
  );
}
