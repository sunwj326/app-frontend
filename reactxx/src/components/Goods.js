import React from 'react';
import './Goods.css';

const Goods = ({goods, handleClick})=>{
  return(
    <ul>
      {
        goods.map((item) =>
          <li className='goods' key={item.id} onClick={() => handleClick(item)}>{item.name}</li>
        )
      }
    </ul>
  );
}

export default Goods;
