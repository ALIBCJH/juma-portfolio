import type { Metadata } from "next";
import { Inter, Outfit, Comforter_Brush } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const comforter = Comforter_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-artistic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simon Juma (Ombom) | Software Engineer & Full-Stack Developer | AWS, Node.js, AI",
    template: "%s | Simon Juma"
  },
  description:
    "Simon Juma (Simon Ombom) - Software Engineer from Kenya specializing in Node.js, MERN stack, AWS, Terraform, and AI solutions. Building impactful technology for health, agriculture, and education in Africa. DeKUT alumnus. Available for software engineering roles.",
  metadataBase: new URL("https://simonjuma.me"),
  keywords: [
    "Simon Juma",
    "Simon Ombom",
    "Simon Juma Ombom",
    "Software Engineer Kenya",
    "Full Stack Developer Kenya",
    "Node.js Developer Nairobi",
    "MERN Stack Developer",
    "AWS Engineer",
    "Terraform Developer",
    "AI Engineer Kenya",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Software Engineer Nyeri",
    "DeKUT Alumni",
    "Dedan Kimathi University",
    "Freelance Developer Kenya",
    "AgTech Developer",
    "HealthTech Developer",
    "EdTech Developer",
    "RAG Pipeline Developer",
    "Python AI Developer",
  ],
  authors: [{ name: "Simon Juma Ombom", url: "https://simonjuma.me" }],
  creator: "Simon Juma Ombom",
  publisher: "Simon Juma",
  openGraph: {
    title: "Simon Juma (Ombom) | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer from Kenya building scalable solutions with Node.js, MERN stack, AWS, and AI. Specialized in health, agriculture, and education technology. Open to software engineering opportunities.",
    url: "https://simonjuma.me",
    siteName: "Simon Juma Portfolio",
    images: [
      {
        url: "https://simonjuma.me/images/simon-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Simon Juma (Simon Ombom) - Software Engineer from Kenya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Juma (Ombom) | Software Engineer",
    description:
      "Software Engineer specializing in Node.js, MERN stack, AWS, Terraform, and AI solutions. Building impactful tech for Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://simonjuma.me",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${comforter.variable}`}>
      <head>
        {/* JSON-LD structured data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Simon Juma Ombom",
              alternateName: ["Simon Juma", "Simon Ombom"],
              url: "https://simonjuma.me",
              image: "https://simonjuma.me/images/simon-hero.jpg",
              sameAs: [
                "https://github.com/ALIBCJH",
                "https://www.linkedin.com/in/simon-ombom-603723253/",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Dedan Kimathi University of Technology"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nyeri",
                addressCountry: "Kenya"
              },
              description:
                "Software Engineer specializing in Node.js, MERN stack, AWS, Terraform, and AI solutions. Building impactful technology for health, agriculture, and education in Africa.",
              email: "simonjuma465@gmail.com",
              knowsAbout: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "React",
                "Next.js",
                "AWS",
                "Terraform",
                "Python",
                "Artificial Intelligence",
                "RAG Pipelines",
                "Backend Development",
                "Full Stack Development"
              ]
            }),
          }}
        />
        {/* JSON-LD for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Simon Juma Portfolio",
              alternateName: "Simon Ombom Portfolio",
              url: "https://simonjuma.me",
              description: "Professional portfolio of Simon Juma (Simon Ombom), Software Engineer",
              author: {
                "@type": "Person",
                name: "Simon Juma Ombom"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://simonjuma.me/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
