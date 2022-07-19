import React, {useState} from 'react';
import usePageData from '../../custom-hooks/usePageData';
import Spinner from "../Spinner/Spinner";
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import ProductList from '../ProductList/ProductList';


const HomePage = () => {
  const restaurants = usePageData('partners')

  const [prodName, setName] = useState({
    
  });

const onChange = (elem) => {
  setName({
    nameProd: elem,
   });
}

  return (
    <>
    <div className='content'>
    <section className='restaurants'>       
    <div className="restaurants__cards">
      {restaurants
        ? restaurants?.map(item => <RestaurantCard key={item.image} {...item} onChange={onChange}/>)
        : <Spinner />
      }
    </div>  
     </section>     
      <ProductList prodName = {prodName}/>     
    </div>
    
    </>
  )
}

export default HomePage;








