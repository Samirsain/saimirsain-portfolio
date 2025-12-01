import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: "https://www.samirsain.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "Samirsain";
export const SOURCE_CODE_GITHUB_REPO = "Samirsain/saimirsain-portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Samirsain/saimirsain-portfolio";
export const TWITTER_URL = "https://x.com/codexmir";

export const SPONSORSHIP_URL = "https://github.com/sponsors/Samirsain";

export const UTM_PARAMS = {
  utm_source: "samirsain.com",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
