import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attha's - Fine Dining Restaurant",
  description: "Experience exquisite culinary artistry at Attha's, where tradition meets innovation in every dish. Reserve your table for an unforgettable dining experience.",
  keywords: ["fine dining", "restaurant", "Attha's", "gourmet food", "reservations"],
  openGraph: {
    title: "Attha's - Fine Dining Restaurant",
    description: "Experience exquisite culinary artistry at Attha's",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
