"use client"
import { Product } from "@/app/models/index";
import { useEffect, useState } from "react";
import type { Metadata } from 'next';
import  styles from './buy.module.scss';

export default function Buy() {

 

    const [checkBasket, setCheckBasket] = useState(false);
    const [basket, setBasket] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {

        setBasket(JSON.parse(localStorage.getItem('basket') || '[]'))
        setCheckBasket(true)

       


    }, [])


    useEffect(() => {
        if(checkBasket) {
            if (basket.length == 0) {
                window.location.href = "/"
            }
        }
      
    }, [basket])


    const finishedBuying = () => {
        if (name.length > 0 && email.length > 0) {
            localStorage.setItem('basket', JSON.stringify([]))
            alert("Заказ оформлен")
            window.location.href = "/"


        } else {
            alert("Заполните обязательные поля");
        }
    }


    return (

        <div className="container">
            <div className="row">
                <div className={`form-group ${styles.form_group}`} >
                    <label>Имя*</label>
                    <input type="text" className="form-control" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={`form-group ${styles.form_group}`}>
                    <label>Email*</label>
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={`form-group ${styles.form_group}`} >
                    <label>Комментарий</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                </div>

                <button onClick={() => finishedBuying()} type="submit" className={`btn btn-success  ${styles.form_group}`} >Оформить</button>

            </div>
        </div>
    )
} 