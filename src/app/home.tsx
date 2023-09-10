"use client";
import Head from 'next/head'
import type { Metadata } from 'next'
import { FC, useEffect, useState } from 'react'
import { IProduct, Product } from './models/index';
import Link from 'next/link';
import CardProduct from './components/CardProduct';


const Home:FC<IProduct> = ({products, categories}) => {

 
  const [products_data, setProducts] = useState<Product[]>([]);
    const [categories_data, setCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [pageCurrent, setCurrentPage] = useState<number>(1);

  const [category, setCategory] = useState<string>('all');
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(0);


  useEffect(() => {

      setProducts(products || [])
      setFilteredProducts(products || [])
      setCategories(categories || [])
      setPages(Math.ceil(products.length/5))
  }, [])

 


  const getPaninationPages = (count: number) => {

    let array = [];

    for (let i = 1; i <= count; i++) {
      array.push(i)
    }

    return array;
  }



  const dividedProducts = () => {
    let from = (pageCurrent - 1) * 5;
    let to = pageCurrent * 5;



    return filteredProducts.slice(from, to)
  }


  const changeFilter = () => {
    let products_time = products_data;


    if (category != "all") {
      products_time =products_data.filter((item) => item.category == category)
    } else {
      products_time = products_data
    }


    if (priceFrom > 0) {

      products_time = products_time.filter((item) => item.price > priceFrom)
    }




    if (priceTo > 0) {

      products_time = products_time.filter((item) => item.price < priceTo)
    }





    setFilteredProducts(products_time)
    setPages(Math.ceil(products_time.length / 6))
  }

  return (
    <div>
     
      <div className='container'>
        <div className="row">
          <div className="col-md-3">
            <select className="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
              <option selected value="all">Выберите категорию</option>
              {categories_data.map((item) => {
                return (
                  <option key={item} value={item}>{item}</option>
                )
              })}

            </select>
          </div>

          <div className="col-md-2">
          </div>

          <div className="col-md-2">
            <input type="text" className="form-control" placeholder="От" aria-label="From" onChange={(e) => setPriceFrom(parseInt(e.target.value))} />
          </div>
          <div className="col-md-2">
            <input type="text" className="form-control" placeholder="До" aria-label="To" onChange={(e) => setPriceTo(parseInt(e.target.value))} />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-secondary" onClick={(e) => changeFilter()}>Поиск</button>
          </div>
        </div>
      </div>


      <div className='container' style={{marginTop: '15px'}}>
        <div className="row">
          {filteredProducts.length > 0 ? dividedProducts().map((item) => {
            return (

              <CardProduct product={item} />


            )
          }) : "Загрузка"}

        </div>

        <div className="mt-10 inline-block">

          {getPaninationPages(pages).map((item) => {
            return (
              <button onClick={() => setCurrentPage(item)} type="button"   className={`float-left ml-5 btn ${item == pageCurrent ? 'btn-success' : 'btn-light'}`} >{item}</button>
            )
          })}






        </div>
      </div>


    </div>
  )
}



export default Home