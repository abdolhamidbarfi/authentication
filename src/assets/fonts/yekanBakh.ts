import localFont from "next/font/local";

const yekanBakh = localFont({
  src: [
    {
      path: "./yekan-bakh/YekanBakh-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./yekan-bakh/YekanBakh-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});

export default yekanBakh;
