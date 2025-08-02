import { Inter, JetBrains_Mono } from "next/font/google";

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: [
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ],
});

// Legacy exports for backward compatibility
export const geistSans = fontSans;
export const geistMono = fontMono;
export const inter = fontSans;
