import { memo } from 'react';
import { CartItemContainer } from './cart-item.styles';

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </CartItemContainer>
  );
});

export default CartItem;
