
'use client'

import { useEffect, useState } from "react";
import ProductComponent, { ProductType } from "./ProductComponent";
import Link from "next/link";

export default function ProductListComponent() {
  // create state in productList component
  const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect 
  useEffect(() => {
    // create function
    async function fetchingData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
    }
    fetchingData();
  }, [])

  return (
    <div className="grid grid-cols-4 p-4 gap-8">
      {
        products.map((items, _) => {
          return <Link key={_} href={`/products/${items.id}`}>
            <ProductComponent
              image={items?.image}
              price={items.price}
              description={items.description}
              title={items.title} />
          </Link>
        })
      }
    </div>
  )
}
