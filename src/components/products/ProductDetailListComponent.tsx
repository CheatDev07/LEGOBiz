
'use client'

import { useEffect, useState } from "react";
import ProductComponent, { ProductType } from "./ProductComponent";
import ProductDetailComponent from "./ProductDetailComponent";

type ProductIDType = 
{
  id: number;
}

export default function ProductDetailListComponent({id}:ProductIDType) {
  // create state in productList component
  const [products, setProducts] = useState<ProductType>();

  // useEffect 
  useEffect(() => {
    // create function
    async function fetchingData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const products = await response.json();
      setProducts(products);
    }
    fetchingData();
  }, [id])

  return (
   
    <ProductDetailComponent 
    image={products?.image as string} 
    price={products?.price as number} 
    description={products?.description as string} 
    title={products?.title as string}
    category={products?.category}
    />
  )
}
