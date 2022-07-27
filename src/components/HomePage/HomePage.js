import React, {useState} from 'react';
import usePageData from '../../custom-hooks/usePageData';
import Spinner from "../Spinner/Spinner";
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import ProductList from '../ProductList/ProductList';


const HomePage = () => {
  const restaurants = usePageData('partners')
 
  const [prodName, setName] = useState({});

  const storageData = localStorage.getItem('User');
  const allData = JSON.parse(storageData);
  const obRest = allData?.find(item => item.nameRest);
  let activeName = null;
  
  if(obRest) {    
    activeName = obRest.nameRest
  }  

  const [activeRest, setActive] = useState({
    active: activeName,
  });

 
const onChange = (elem) => {
  setName({
    nameProd: elem,
   });
}


const onActive = (elem) => {

  setActive({
    active: elem,
  });
  
}

  return (    
    <div className='content'>
    <section className='restaurants'>       
      <div className="restaurants__cards">
        {
        !activeRest.active ? 
        restaurants
          ? restaurants?.map(item => <RestaurantCard key={item.image} {...item} onChange={onChange}/>)
          : <Spinner /> : 
          restaurants
          ? restaurants?.filter(item => item.name === activeRest.active).map(item => <RestaurantCard key={item.image} {...item} onChange={onChange}/>)
          : <Spinner />
        }
      </div>
    </section>     
      <ProductList prodName = {prodName} onActive = {onActive}/>     
    </div>   
  )
}

export default HomePage;








