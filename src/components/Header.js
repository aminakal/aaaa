import React, { useState } from 'react';
import Order from './Order';
export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <button onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-btn ${cartOpen && 'active'}`}>Корзина</button>
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.map(el =>(
              <Order key={el.id} item={el} />
            ))}
          </div>
        )} 
      </div>
      <div className='presentation'></div>
    </header>
  );
}
