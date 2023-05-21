import React from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link'

function HomePage({products}) {
  // console.log(products);

const renderProducts = ()=>{
        if(products.length === 0)  return <h1 className='text-3xl font-bold underline pb-10'>No Product</h1>

        return products.map(products=>(
          
          <Link href={`/products/${products.id}`} key={products}>
               <h1 className='text-1xl font-bold underline col text-center pb-10'>Product</h1>
                  <div  className='border border-gray-200 shadow-md p-6'>
                      <h1>{products.name}</h1>
                      <p>{products.description}</p>
                      <p>{products.price}</p>
                </div>
          </Link>
                      ))
          }
  return (
      <Layout>
   
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            {renderProducts()}
      </div>
        {/* <div>
          <form method='POST' action='/api/products'>
          <button>SEND</button>
          
          </form>
        </div> */}

        </Layout>
      );
    }
    export const getServerSideProps = async (context) => {
      const {data: products} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      // console.log(res.data);
    return {
      props:{
        products,
      },
    }
}
export default HomePage



