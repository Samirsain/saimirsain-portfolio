import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { WebSite, WithContext } from "schema-dts";


import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: "Samir Sain – Full Stack Developer & Digital Solutions Expert",
  },
  description: "I’m Samir Sain, a passionate Full Stack Developer with 5 years of experience building modern digital solutions. Specializing in Next.js, React, and scalable web applications.",
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "Samir Sain",
      url: SITE_INFO.url,
    },
  ],
  creator: "Samir Sain",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@codexmir", // Twitter username
    images: [SITE_INFO.ogImage],
  },
  verification: {
    google: "ziDZd_lijC0FXqCM7zawWTZ5IXuosqWYbzNhYhSXNfI",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              getWebSiteJsonLd(),
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Samir Sain",
                url: "https://samirsain.com",
                jobTitle: "Full Stack Developer",
                image: "https://samirsain.com/og-image.png",
                sameAs: [
                  "https://github.com/Samirsain",
                  "https://x.com/codexmir",
                  "https://www.linkedin.com/in/samirsain"
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "Sam4You"
                }
              }
            ]).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>
            {children}
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}
