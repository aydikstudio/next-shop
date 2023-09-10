"use client"
import { Product } from "@/app/models/index";
import { useEffect, useState } from "react";
import type { Metadata } from 'next';





export default function Product<IProduct>({ product }: any) {
  
    const [basket, setBasket] = useState<number[]>([]);


    const [product_new, setProduct] = useState<Product>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
    });

    useEffect(() => {
        setProduct(product)
        


setBasket(JSON.parse(localStorage.getItem('basket') || '[]'))
    }, [])

    const clickBasket = () => {
        let basket_time = basket;
        if (basket_time.find((item: any) => item == product_new.id)) {

            basket_time = [...basket_time.filter((item: any) => item != product_new.id)]

        } else {
            basket_time = [...basket_time, product_new.id]
        }
        setBasket(basket_time)
        localStorage.setItem('basket', JSON.stringify(basket_time));

    }

    return (
        <div>
      
       
        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <img src={product_new.image} className="w-60" />
                </div>
                <div className="col-md-6">
                    <p>{product_new.title}</p>
                    <p>{product_new.description}</p>
                    <p><b>${product_new.price}</b></p>
                    <p>
                        {basket.find((item: any) => item == product_new.id) ?
                            <button type="button" className="btn btn-danger" onClick={(e) => clickBasket()}>Убрать из  корзины</button>
                            : <button type="button" className="btn btn-success" onClick={(e) => clickBasket()}>Добавить в корзину</button>}

                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}