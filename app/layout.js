import "./globals.css";
import Navbar from "../components/nav";
import Footer from "../components/footer";

export const metadata = {
  title: "New Testament Church of God Kenya",
  description:
    "Welcome to the New Testament Church of God Kenya - Building faith, community, and hope across Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
