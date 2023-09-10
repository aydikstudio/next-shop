"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../models/index";
import  styles from './basket.module.scss';

export default function Basket() {

    const [basket, setBasket] = useState([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data)

            } catch (err) {
                console.log(err)
            }

        }

        setBasket(JSON.parse(localStorage.getItem('basket') || '[]'))

        fetchProducts();

    }, [])


    const clearBasket = () => {
        setBasket([]);
        localStorage.setItem('basket', JSON.stringify([]))
    }

    const deleteGoodBasket = (good_id: number) => {
        let basket_time = basket;
        basket_time = [...basket_time.filter((item: any) => item != good_id)]
        setBasket(basket_time)
        localStorage.setItem('basket', JSON.stringify(basket_time));
    }


    return (<div>
        <div className="container">

            {basket.length > 0 ? basket.map((basket_item: number) => {
                return (

                    <div>

                        <div className="row p-20 mt-20 bg-slate-100" >

                            <div className="col-md-3">
                                <Link href={`product/${basket_item}`} style={{ textDecoration: 'none', color: '#000' }} className="no-underline text-black"><img src={products.find((item: any) => item.id == basket_item)?.image} width='100' />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <p>{products.find((item: any) => item.id == basket_item)?.title}</p>
                                <p><b>${products.find((item: any) => item.id == basket_item)?.price}</b></p>
                            </div>

                            <div className="col-md-3">
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="btn btn-danger" onClick={() => deleteGoodBasket(basket_item)}>Удалить</button>
                            </div>
                        </div>

                    </div>
                )
            }) : 'Корзина пуста'}

            {basket.length > 0 ? (
                <div className="mt-10 text-center ">
                    <div className="row" >
                        <b>Итого: ${
                            basket.map((basket_item: number) => {
                                return products.find((item) => item.id == basket_item)?.price
                            }).reduce((partialSum: any, a: any) => partialSum + a, 0) 
                        }</b>
                    </div>
                    <div className="row" >
                        <button onClick={() => window.location.href = "/buy"} type="button" className={`btn btn-success ${styles.buttons_basket}`}>Оформить покупку</button>
                        <button type="button" className={`btn btn-light buttons_basket ${styles.buttons_basket}`}  onClick={() => clearBasket()}>Очистить корзину</button>

                    </div>
                </div>
            ) : ''}



        </div>
    </div>)
}