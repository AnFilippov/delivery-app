import React from 'react';


const ProductCard = (props) => {
const user = "User";

  const {  
    id, 
    name,
    image,
    price, 
    description
  } = props;


  
  const handleAddToBasket = () => {    

    const storageData = localStorage.getItem(user);    

    let data = [
      {
        id,
        title: name,
        cost: price,
        count: 1
      }
    ];  

    
    if (!!storageData) {

      const allData = JSON.parse(storageData);
      const isSameProduct = !!allData.find(item => item.id === id);

      if (isSameProduct) {
        allData.forEach(item => {
          if (item.id === id) {
            item.count = item.count + 1;
          }
        });
        localStorage.setItem(user, JSON.stringify(allData));
      } else {
        const newData = allData.concat(data);
        localStorage.setItem(user, JSON.stringify(newData));
      }
    } else {
      if (user) {
        localStorage.setItem(user, JSON.stringify(data));
      }
    }
  }

 
  const src = require(`../../assets/${image}`);

  return (  
    
    <div className='card'>
      <img src={src} alt={src} className="card-image" />
      <div className='card-text'>

        <div className='card-heading'>
          <h3 className='card-title card-title-reg'>{name}</h3>
        </div>

        <div className='card-info'>
          <div className='ingredients'>{description}</div>
        </div>

        <div className='card-buttons'>
          <button className='button button-primary button-add-cart' onClick={handleAddToBasket}>
            <span className='button-card-text'>to Cart</span>
            <span className='button-cart-svg'></span>
          </button>
          <strong className='card-price-bold card-price'>${price}</strong>
        </div>
      </div>
    </div>
    )
}


export default ProductCard;
