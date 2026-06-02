import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wellsy - AI Health Management App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #059669 50%, #0d9488 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        {/* Logo + App name */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <div
            style={{
              background: "white",
              width: 90,
              height: 90,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <svg width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#16a34a"
                d="M16 8c-2.2-2.2-5.8-2.2-8 0s-2.2 5.8 0 8l8 8 8-8c2.2-2.2 2.2-5.8 0-8s-5.8-2.2-8 0z"
              />
            </svg>
          </div>
          <span style={{ fontSize: 72, fontWeight: 900, color: "white", letterSpacing: -2 }}>
            Wellsy
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 38,
            color: "rgba(255,255,255,0.95)",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          AI-powered Health Management App
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          {["Food Tracking", "Weight", "Sleep", "Group"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 100,
                padding: "10px 24px",
                fontSize: 22,
                color: "white",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          wellsy.app
        </div>
      </div>
    ),
    { ...size }
  );
}
