import React from 'react'
import Layout from '../../../components/Layout'
import axios from 'axios'
import {useRouter} from 'next/router'

function ProductView ({product}) {
    const router = useRouter()
    // console.log(product);
    const handleDelete = async id =>{
        // console.log(id);
       await  axios.delete('/api/products/' + id)
        // console.log(res);
        router.push('/')
    }

  return (
    <Layout>
      <h1>Prouct</h1>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className='bg-red-500 hover:bg-red-700 text-white px-3 py-2' onClick={()=> handleDelete(product.id)}>Delete</button>
            <button className='bg-gray-500 hover:bg-gray-800 text-white ml-2 px-5 py-2' onClick={()=> router.push('/products/edit/' + product.id)}>Edit</button>

    </Layout>
  )
}

export const getServerSideProps = async (context)=>{
   const {data: product} = await axios.get('http://localhost:3000/api/products/' + context.query.id)
    // console.log(res.data);

    return {
        props:{
            product,
        }
    }
}

export default ProductView
