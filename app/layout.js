import "./globals.css";
import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div><Navbar/></div>
        {children}
      </body>
    </html>
  );
}
