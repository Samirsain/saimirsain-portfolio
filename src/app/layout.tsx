import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";



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
    template: `%s`,
    default: "Samir Sain - Full Stack Developer",
  },
  description: "Official Portfolio of Samir Sain",
  keywords: [
    "Samir Sain",
    "Samir Sain Developer",
    "Samir Sain Portfolio",
    "Samir Sain Official Website",
  ],
  authors: [
    {
      name: "Samir Sain",
      url: SITE_INFO.url,
    },
  ],
  creator: "Samir Sain",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Samir Sain",
    url: "/",
    type: "website",
    title: "Samir Sain - Full Stack Developer",
    description: "Official website of Samir Sain, Full Stack Developer.",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: "Samir Sain",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Samir Sain",
              "url": SITE_INFO.url,
              "logo": `${SITE_INFO.url}/images/samirsain-avatar.png`,
              "description": "Official website of Samir Sain - Full Stack Developer.",
              "sameAs": [
                "https://instagram.com/codexmir",
                "https://facebook.com/samirsain",
                "https://linkedin.com/in/samirsain",
                "https://github.com/Samirsain"
              ]
            }).replace(/</g, "\\u003c"),
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
