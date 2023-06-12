import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className=" bg-gray-100 flex flex-col p-8 gap-8 text-gray-400">
          <div>
            <p className="text-black">Address</p>
            <p>Netherlands - 48E Louis Amstrongweg, 1311RK, Almere</p>
          </div>
          <div>
            <p className="text-black">Say Hello</p>
            <p>contact@raib.com</p>
          </div>
          <div className=" flex flex-col gap-3">
            <p className="text-black">Social</p>
            <a href="#" className=" uppercase">
              facebook
            </a>
            <a href="#" className=" uppercase">
              twitter
            </a>
            <a href="#" className=" uppercase">
              linkedin
            </a>
            <a href="#" className=" uppercase">
              instagram
            </a>
          </div>

          <br />
          <hr />
          <br />
          <p>&copy; 2023 Raib consultant Etél</p>
        </footer>
      </body>
    </html>
  );
}
