import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const weblySleek = localFont({
  src: "./fonts/weblysleekuisb.ttf",
  variable: "--font-webly-sleek",
  display: "swap",
});

export const metadata = {
  title: {
    default: "New Testament Church of God Kenya | NTCoG Kenya",
    template: "%s | NTCoG Kenya",
  },
  description:
    "New Testament Church of God Kenya (NTCoG) - A vibrant Pentecostal church serving Kenya since 1977. Join our 15,000+ members across 224+ churches in 28+ districts. Building faith, community, and hope across Kenya.",
  keywords: [
    "New Testament Church of God Kenya",
    "NTCoG Kenya",
    "NTCOGK",
    "Pentecostal church Kenya",
    "Church of God Kenya",
    "Christian church Kenya",
    "Nairobi church",
    "Kenya church",
    "Pentecostal ministry",
    "Church planting Kenya",
    "Christian community Kenya",
    "Bible church Kenya",
    "Spirit-filled church",
    "Evangelical church Kenya",
    "Church services Kenya",
    "Christian worship Kenya",
    "Faith community Kenya",
    "Church branches Kenya",
    "Regional churches Kenya",
    "Dr. David Gilbert Bwire",
  ],
  authors: [{ name: "New Testament Church of God Kenya" }],
  creator: "New Testament Church of God Kenya",
  publisher: "New Testament Church of God Kenya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ntcogk.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "New Testament Church of God Kenya | NTCoG Kenya",
    description:
      "A vibrant Pentecostal church serving Kenya since 1977. Join our 15,000+ members across 224+ churches in 28+ districts. Building faith, community, and hope across Kenya.",
    url: "https://ntcogk.org",
    siteName: "New Testament Church of God Kenya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Testament Church of God Kenya - Building Faith, Community, and Hope",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Testament Church of God Kenya | NTCoG Kenya",
    description:
      "A vibrant Pentecostal church serving Kenya since 1977. Join our 15,000+ members across 224+ churches in 28+ districts.",
    images: ["/og-image.jpg"],
    creator: "@ntcogk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "religion",
  classification: "Church, Religious Organization, Pentecostal Church",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "New Testament Church of God Kenya",
    alternateName: ["NTCoG Kenya", "NTCOGK"],
    url: "https://ntcogk.org",
    logo: "https://ntcogk.org/icons/logo.png",
    description:
      "A vibrant Pentecostal church serving Kenya since 1977. Building faith, community, and hope across Kenya.",
    foundingDate: "1977-05-13",
    foundingLocation: {
      "@type": "Place",
      name: "Karatina, Nyeri District, Kenya",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kwarara Rd/Ndege Rd, Off Bugani Rd",
      addressLocality: "Karen, Langata",
      addressRegion: "Nairobi",
      postalCode: "00502",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-759-120-222",
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: ["https://www.facebook.com/ntcogk", "https://www.ntcogk.org"],
    member: {
      "@type": "Organization",
      name: "Church of God World Missions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cleveland",
        addressRegion: "Tennessee",
        addressCountry: "US",
      },
    },
    numberOfEmployees: "15000+",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    knowsAbout: [
      "Pentecostal Christianity",
      "Church Planting",
      "Community Care",
      "Evangelism",
      "Biblical Education",
      "Youth Ministry",
      "Pastoral Care",
    ],
  };

  return (
    <html lang="en-KE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="canonical" href="https://ntcogk.org" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Kenya" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
      </head>
      <body
        className={`${weblySleek.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
