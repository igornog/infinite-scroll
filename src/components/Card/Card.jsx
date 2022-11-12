import React from 'react';
import './Card.scss';

const Card = React.forwardRef((props, ref) => {
  return (
    <div onClick={props.seletingItem} className={`card ${props.className ? 'selected' : ''}`} ref={ref} >
      <p>{props.item.name}</p>
      <p>{props.item.id}</p>
    </div>
  );
});
export default Card;
