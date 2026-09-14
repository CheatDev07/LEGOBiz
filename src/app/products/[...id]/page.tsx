
import ProductDetailListComponent from "@/components/products/ProductDetailListComponent";

export default async function DetailProductPage(
  {
  params
}:{
  params: Promise<{id: number}>
}) {
  const {id} = await params;
  return (
    <div>
      {/* Product ID = {id} */}
       <ProductDetailListComponent id={id}/>
    </div>
  )
}
