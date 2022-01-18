import Link from 'next/link';
import React from 'react'
import styles from "../styles/Home.module.css";
import { products } from '../utils/product';
import Image from 'next/image';

const Products = () => {
  return (
    <>
   
    <div>
      <h1>Select a  products</h1>
    </div>
    <div>
      {
        products.map((product, index) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={''}>
            <div className="card">
              <span className='drugs'>Pharmaceutical product</span>
              <Image key={product.images} src={product.images} alt="product-image" width={550} height={350} />
              <div className="products-info">
                <h2>{product.name}</h2>
                <span>{product.price}</span>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
    </>
  )
}


export default Products