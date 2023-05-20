import React from 'react'
import Link from 'next/link'

export function ProductCard({product}) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
        
    <div  className='border border-gray-200 shadow-md p-6'>
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <p>{products.price}</p>
  </div>
    </Link>
  )
}

