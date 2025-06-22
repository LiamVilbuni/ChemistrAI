import { IBM_Plex_Sans, Inter } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-ibm-plex-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export {inter, ibmPlexSans};
