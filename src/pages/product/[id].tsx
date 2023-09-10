
import Head from 'next/head'
import type { Metadata, NextPage, GetServerSideProps } from 'next'
import { ProductService } from '@/app/services/products.service'
import { IProduct } from '@/app/models'
import RootLayout from '@/pages/layout';
import { useRouter } from 'next/router'
import  Product from '@/app/product'






export const metadata: Metadata = {
  title: 'Интернет-магазин',
  description: 'Интернет-магазин всего',
}


export const getServerSideProps: GetServerSideProps =  async ({query}:any) => {



  const product = await ProductService.getProduct(query.id)


  return {
    props: {
       product
    }
  }
}


const Product_Server:NextPage<IProduct> = ({product}:any) => {


  return (
    <div>
      <Head>
        <title>{product.title}</title>
      </Head>
    <RootLayout>
        <Product product={product}/>
    </RootLayout>
    </div>
  )

}


export default Product_Server

