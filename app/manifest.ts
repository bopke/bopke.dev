import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michał Kubik - Fullstack Engineer",
    short_name: "Bopke.dev",
    description:
      "Michał Kubik - backend-leaning fullstack engineer who builds systems that hold up. Open to senior backend and fullstack roles.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c21",
    theme_color: "#1c1c21",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
