import { inter, ibmPlexSans } from '@/utils/fonts.js';
import "./globals.css";

export const metadata = {
  title: "ChemistrAI",
  description: "An AI powered chemistry assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
        <style>
          {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-ibm-plex-sans: ${ibmPlexSans.style.fontFamily};
          }

          @media (prefers-color-scheme: light) {
            :root {
              --color-primary: #0077B6;         /* Lab Blue */
              --color-secondary: #7209B7;       /* Plasma Purple */
              --color-accent: #3EF8C1;          /* Neon Mint */
              --color-background: #F5F7FA;      /* Fog White */
              --color-surface: #E1E5EC;         /* Ion Grey */
              --color-text-primary: #1E1E1E;    /* Carbon Black */
              --color-text-secondary: #4B4B4B;  /* Graphite Grey */
              --color-success: #00C896;         /* Synthesis Green */
              --color-error: #D72638;           /* Reaction Red */
            }
          }
            
            @media (prefers-color-scheme: dark) {
              :root {
                --color-primary: #E50914;         /* Dark Lab Blue */
                --color-secondary: #B5179E;       /* Dark Plasma Purple */
                --color-accent: #3EF8C1;          /* Neon Mint */
                --color-background: #0B0F18;      /* Dark Fog White */
                --color-surface: #1E2633;         /* Dark Ion Grey */
                --color-text-primary: #F5F7FA;    /* Light Carbon Black */
                --color-text-secondary: #C0C7D2;  /* Light Graphite Grey */
                --color-success: #00E6AA;         /* Dark Synthesis Green */
                --color-error: #FF4D5B;           /* Dark Reaction Red */
              }
            }
        `}
        </style>
      </body>
    </html>
  );
}
