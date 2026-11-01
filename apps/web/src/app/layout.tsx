import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Variable font, so no explicit weights are needed.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RDCS | Rapid Drone Capture System",
  description:
    "RDCS is a Stevens Institute of Technology senior design project sponsored by General Dynamics Mission Systems: a ground-based system that tracks a small drone and deploys a tethered net to catch it.",
};

// Next 16 takes theme color from `viewport`, not `metadata`. Matches --color-bg.
export const viewport: Viewport = {
  themeColor: "#0c1424",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${sourceSans.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
