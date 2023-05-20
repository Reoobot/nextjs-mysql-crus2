import React from 'react'
import { ProductForm } from '../../components/ProductForm'
import Layout from '../../components/Layout'

function New() {
  return (
    <Layout>
      <h1 className='text-3xl font-bold underline col text-center pb-10'>New one product</h1>
      <div className='grid place-items-center h5/6'>
        <ProductForm/>
      </div>
    </Layout>
  )
}

export default New
