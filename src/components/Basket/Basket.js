import React, { useState } from 'react';
import firebase from "../../utils/fb-config";



const Basket = () => {
  const [loadValue, setValue] = useState({});

const user = "User";
  const dataFromStorage = JSON.parse(localStorage.getItem(user));
  const [data, setData] = useState(dataFromStorage);
  const totalPrice = data?.reduce((acc, item) => acc + item.cost * item.count, 0);

   const addMessage = (e) => {
    e.preventDefault();   
    const formData = loadValue;
    const storageData = localStorage.getItem(user);
    const allData = JSON.parse(storageData);
    
   var userInfo = {
        'contactList' : formData,
        'order' : allData,
      };
      
      firebase
      .database()
      .ref('/orders')
      .push(userInfo)
      .then(() => alert('Data push to database.')); 
      
      localStorage.removeItem(user);
  }

 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue(state => ({ ...state, [name]: value, }));

  }

  const handleCountProduct = (id, count, k) => {
    if (count === 1 && k === -1) {
      const filteredData = data.filter(product => product.id !== id);
      localStorage.setItem(user, JSON.stringify(filteredData));
    } else {
      const changedData = data.map(product => {
        if (product.id === id) {
          return { ...product, count: product.count + k }
        } else return product;
      });
      localStorage.setItem(user, JSON.stringify(changedData));
    }

    setData(JSON.parse(localStorage.getItem(user)));
  }

  return (
   <>
      <div className='modal modal-cart' ></div>
      <div className='dialog'>
        <div className='modal-header'>        
          <h4 className='modal-title'>Cart</h4>          
        </div>
        <div className='basket-body'>
        <form onSubmit={addMessage} className='basket-form'>
             <p><input type="text"  name="address" onChange={handleChange} placeholder="Input your address" /></p> 
             <p><input type="email" name="email"  onChange={handleChange} placeholder="Input your email"/></p>
             <p><input type="phone" name="phone"  onChange={handleChange} placeholder="Input your phone"/></p>
             <p><input type="text" name="name"  onChange={handleChange} placeholder="Input your name"/></p>             
            <button className='button button-primary' type='submit'>Submit</button>         
          
        </form>
        <ul className='modal-body'>
        
          {data?.map(product => {
            const { id, title, cost, count } = product;
            return (
              <li key={id} className='food-row'>
                <span className='food-name'>{title}</span>
                <strong className='food-price'>${cost}</strong>
                <div className='food-counter'>
                  <button className='counter-button' onClick={() => handleCountProduct(id, count, -1)}>-</button>
                  <span className='counter'>{count}</span>
                  <button className='counter-button' onClick={() => handleCountProduct(id, count, 1)}>+</button>
                </div>
              </li>
            )
          })}
          <span className='modal-pricetag'>${totalPrice}</span>
        </ul>
        <div className='modal-footer'>
          
          
        </div>
        </div>
       
        
       
      </div>
   </>
      
    
  )
}

export default Basket;