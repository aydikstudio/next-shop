
import Head from 'next/head'
import type { Metadata, NextPage, GetServerSideProps } from 'next'
import { ProductService } from '@/app/services/products.service'
import Home from '@/app/home'
import { IProduct } from '@/app/models'
import RootLayout from '@/pages/layout'








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


const HomePage:NextPage<IProduct> = ({products, categories}:any) => {
 

  return (
  <RootLayout>
  <Home products={products} categories={categories}/>
  </RootLayout>
  )

}


export default HomePage

