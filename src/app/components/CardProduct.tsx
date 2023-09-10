import { FC } from "react";
import { IProductSingle } from "../models/index";
import Link from 'next/link';


const CardProduct: FC<IProductSingle> = ({product}) => {
    return (
        <div key={product.id} className="col-md-3" style={{marginTop: '15px'}}>
        <Link href={`/product/${product.id}`} className="no-underline">
          <div className="card  p-10" >
            <img className="card-img-top h-60 w-24 mx-auto" src={product.image} alt="Card image cap"  />
            <div className="card-body text-center"  >
              <p className="card-text">{product.title}</p>
              <p className="card-text font-bold">${product.price}</p>
            </div>
          </div>
        </Link>
      </div>
    )
}


export default CardProduct;