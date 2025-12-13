import "./globals.css";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { ScrollProgress } from "../components/ui/scroll-progress";

export const metadata = {
  title: "New Testament Church of God Kenya",
  description:
    "Welcome to the New Testament Church of God Kenya - Building faith, community, and hope across Kenya.",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{
          fontFamily:
            '"Webly Sleek UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        }}
      >
        <ScrollProgress />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
