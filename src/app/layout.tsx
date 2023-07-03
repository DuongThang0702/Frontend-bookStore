"use client";
import "@/style/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "../redux/provider";
import ProgressBar from "next-nprogress-bar";
export const metadata = {
  title: "BooksShop",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
        <ProgressBar
          height="4px"
          color="#59429a"
          options={{ showSpinner: false }}
          shallowRouting
          appDirectory
        />
      </body>
    </html>
  );
}