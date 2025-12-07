import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";
import { GitHubStars } from "@/registry/github-stars";

async function getStargazerCount() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    // Only add Authorization header if token is available
    if (process.env.GITHUB_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_API_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return 0;
    }

    const json = (await response.json()) as { stargazers_count?: number };
    return Number(json?.stargazers_count) || 0;
  } catch {
    return 0;
  }
}

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount();

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  );
}
