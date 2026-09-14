
import ProductListComponent from "@/components/products/ProductListComponent";
import { Metadata } from "next";

// static metadata & opengraph
export const metadata: Metadata = {
  title: 'Products',
  description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
  keywords:"Sell, clothing, T-Shirt for men, T-shirt for women, discount products, free shiping, payment, credit card.",
  openGraph:{
    title: 'Products',
    description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
    images:['M2_Thumbnail.png']
  }
};

export default function ProductPage() {
  return (
   <section>
    {/* display all product cards */}
    <ProductListComponent/>
   </section>
  )
}
