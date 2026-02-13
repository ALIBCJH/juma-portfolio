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
    default: "Simon Juma (Ombom) - AI Architect & Cloud Engineer | Agentic RAG Systems | Terraform Expert",
    template: "%s | Simon Juma"
  },
  description:
    "Simon Juma (Simon Ombom) - AI Architect and Cloud Engineer from Kenya specializing in Agentic RAG Pipelines, Infrastructure as Code (Terraform), AWS cloud architecture, Node.js, and MERN stack. Building autonomous AI systems and resilient cloud infrastructure for Africa's health, agriculture, and education sectors. DeKUT alumnus.",
  metadataBase: new URL("https://simonjuma.me"),
  keywords: [
    "Simon Juma",
    "Simon Ombom",
    "Simon Juma Ombom",
    "AI Architect Kenya",
    "Cloud Engineer Kenya",
    "Agentic AI",
    "RAG Pipelines",
    "Retrieval Augmented Generation",
    "Terraform Expert",
    "Infrastructure as Code",
    "IaC Developer",
    "Software Engineer Kenya",
    "Full Stack Developer Kenya",
    "Node.js Developer Nairobi",
    "MERN Stack Developer",
    "AWS Solutions Architect",
    "AWS Cloud Engineer",
    "AI Engineer Kenya",
    "Machine Learning Engineer",
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
    title: "Simon Juma (Ombom) - AI Architect & Cloud Engineer | Agentic RAG | Terraform",
    description:
      "AI Architect and Cloud Engineer from Kenya specializing in Agentic RAG Pipelines, Infrastructure as Code (Terraform), AWS cloud architecture, Node.js, and MERN stack. Building autonomous AI systems and resilient cloud infrastructure for Africa.",
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
    title: "Simon Juma (Ombom) - AI Architect & Cloud Engineer",
    description:
      "AI Architect specializing in Agentic RAG Pipelines, Terraform, AWS, Node.js, and MERN stack. Building autonomous AI systems and cloud infrastructure for Africa.",
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
              jobTitle: "AI Architect & Cloud Engineer",
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
                "AI Architect and Cloud Engineer specializing in Agentic RAG Pipelines, Infrastructure as Code (Terraform), AWS cloud architecture, and full-stack development. Expert in building autonomous AI systems and resilient cloud infrastructure for African tech solutions.",
              email: "simonjuma465@gmail.com",
              knowsAbout: [
                "Agentic AI",
                "RAG Pipelines",
                "Retrieval Augmented Generation",
                "Infrastructure as Code",
                "Terraform",
                "AWS Cloud Architecture",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React",
                "Next.js",
                "Python",
                "FastAPI",
                "Artificial Intelligence",
                "Machine Learning",
                "Docker",
                "Kubernetes",
                "Microservices",
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
