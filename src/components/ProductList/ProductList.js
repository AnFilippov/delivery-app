import React from "react";
import usePageData from '../../custom-hooks/usePageData';
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";


const ProductList = ({prodName}) => {  
  const rest = usePageData('restaurants');
  const nameProd = prodName.nameProd;

let defaultList = undefined;

if(rest) {
  defaultList = rest.pizzaPlus;  
}
let productList = defaultList;

if (nameProd) {
  productList = rest[nameProd];
}

if (!productList) {
  return <Spinner /> ;
}

const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));


  return (
    <section className="menu">
      <div className="menu__heading">
        <h2 className="menu__title restaurant-title">{productList?.partnerName}</h2>
        <div className="card-info">
          <div className="rating">4.5</div>
          <div className="price"> From {minPrice}$</div>
          <div className="category">{productList?.category}</div>
        </div>
      </div>
      <div className="cards menu__cards">
        {productList?.data.map(foodItem => {
          return <ProductCard key={foodItem.id} {...foodItem} />
        })}

      </div>
    </section>
  )
}

export default ProductList;