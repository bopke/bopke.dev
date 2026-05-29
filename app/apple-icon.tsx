import { ImageResponse } from "next/og";

// Apple touch icon (iOS home-screen / bookmarks), generated to match favicon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1c21",
          color: "#f0f0f2",
          fontSize: 92,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "-0.02em",
        }}
      >
        mk<span style={{ color: "#3f97e8" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
