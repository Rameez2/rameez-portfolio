import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Rameez Shah | Full-Stack Web Developer",
  description: "Welcome to the portfolio of Syed Rameez Shah — a full-stack web developer specializing in modern technologies like React, Next.js, and Node.js.",
  keywords: [
    "Syed Rameez Shah",
    "Rameez Shah",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript"
  ],
  authors: [{ name: "Syed Rameez Shah", url: "https://rameez-portfolio-five.vercel.app/" }],
  creator: "Syed Rameez Shah",
  publisher: "Syed Rameez Shah",
  openGraph: {
    title: "Syed Rameez Shah | Full-Stack Web Developer",
    description: "Discover the skills, projects, and experience of Syed Rameez Shah in full-stack web development.",
    url: "https://rameez-portfolio-five.vercel.app/",
    siteName: "Syed Rameez Shah Portfolio",
    images: [
      {
        url: "https://rameez-portfolio-five.vercel.app/images/rameez.jpg",
        width: 1200,
        height: 630,
        alt: "Syed Rameez Shah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Syed Rameez Shah Portfolio",
  //   description: "Explore the portfolio and development work of Syed Rameez Shah.",
  //   images: ["https://yourdomain.com/images/twitter-card.jpg"],
  //   creator: "@yourTwitterHandle",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Syed Rameez Shah",
  "url": "https://rameez-portfolio-five.vercel.app/",
  "sameAs": [
    "https://github.com/rameezshah",
    "https://linkedin.com/in/rameezshah"
  ],
  "jobTitle": "Full-Stack Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
}
`}
        </script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
