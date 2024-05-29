import BootstrapProvider from "@/helpers/providers/bootstrap-provider";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LMXAI",
  description: "Learning Matrix AI Power in Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>} >
          <BootstrapProvider>
            {children}
          </BootstrapProvider>
        </Suspense>
      </body>
    </html>
  );
}
