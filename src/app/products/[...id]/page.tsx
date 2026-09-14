
import ProductDetailListComponent from "@/components/products/ProductDetailListComponent";
import { error } from "console";

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: number }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
// dynamic metadata & opengraph 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;
 
  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .catch((error)=> console.log(error))
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`${product.image}`, ...previousImages],
    },
  }
}
 
export default async function DetailProductPage(
  { params, searchParams }: Props
  ) {
  const {id} = await params;
  return (
    <div>
      {/* Product ID = {id} */}
       <ProductDetailListComponent id={id}/>
    </div>
  )
}
