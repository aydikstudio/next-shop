
import Head from 'next/head'
import type { Metadata, NextPage, GetServerSideProps } from 'next'
import { ProductService } from '@/app/services/products.service'
import Home from '@/app/home'
import { IProduct } from '@/app/models'
import RootLayout from '@/pages/layout'
import Basket from '@/app/basket/'








export const metadata: Metadata = {
  title: 'Интернет-магазин',
  description: 'Интернет-магазин всего',
}


export const getServerSideProps: GetServerSideProps =  async () => {

  const products = await ProductService.getProducts()
  const categories = await ProductService.getCategories()


  return {
    props: {
       products,
       categories
    }
  }
}


const Basket_Server:NextPage<IProduct> = () => {
 

  return (
    <div>
        <Head>
            <title>Корзина</title>
        </Head>
  <RootLayout>
  <Basket />
  </RootLayout>
 
  </div>
  )

}


export default Basket_Server

