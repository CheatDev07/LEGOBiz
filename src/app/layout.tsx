import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/layout/NavbarComponent";
import FooterComponent from "@/components/layout/FooterComponent";

const katumruy = Kantumruy_Pro({
  variable: '--font-kantumruy-pro'
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static metadata & opengraph
export const metadata: Metadata = {
  title: {
    template:'%s | LEGOBiz',
    default: 'LEGOBiz'
  },
  description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | LEGOBiz',
    default: 'LEGOBiz'
  },
    description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
    images:['M2_Thumbnail.png']
  }
};
// <meta title=bbgjbkjgkd>

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${katumruy.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarComponent/>
        {children}
        <FooterComponent/>
        </body>
    </html>
  );
}
