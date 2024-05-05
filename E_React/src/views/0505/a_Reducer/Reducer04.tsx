import React, { useReducer, useState } from 'react'
import 'Reducer01.css';
// CartItem 타입 정의: 쇼핑 카트에 들어갈 아이템의 속성 정의
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// CartState 타입은 CartItem 배열임을 정의
type CartState = CartItem[];

// CartAction 타입 정의: 쇼핑 카트에서 수행 가능한 액션들 정의
type CartAction =
  | { type: 'add'; item: CartItem }
  | { type: 'remove'; id: number }
  | { type: 'increment'; id: number }
  | { type: 'decrement'; id: number };

// cartReducer 함수: 상태와 액션을 받아 새로운 상태를 반환
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add':
      const exists = state.find(item => item.id === action.item.id);
      if (exists) {
        // 아이템이 이미 존재하면 수량만 증가
        return state.map(item =>
          item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // 새 아이템 추가
      return [...state, { ...action.item, quantity: 1 }];
    case 'remove':
      // 아이템 제거
      return state.filter(item => item.id !== action.id);
    case 'increment':
      // 수량 증가
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'decrement':
      // 수량 감소 (0 이하로 내려가지 않도록 처리)
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      );
    default:
      return state;
  }
}


export default function Reducer04() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputQuantity, setInputQuantity] = useState('');

  // 아이템 추가 함수
  const addItemToCart = () => {
    dispatch({
      type: 'add',
      item: {
        id: Number(inputId),
        name: inputName,
        price: Number(inputPrice),
        quantity: Number(inputQuantity)
      }
    });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: 'remove', id });
  };

  const incrementQuantity = (id: number) => {
    dispatch({ type: 'increment', id });
  };

  const decrementQuantity = (id: number) => {
    dispatch({ type: 'decrement', id });
  };

  return (
    <div className="cart-container">
      <div className="input-group">
        <input className="input-field" value={inputId} onChange={e => setInputId(e.target.value)} placeholder="상품 ID" />
        <input className="input-field" value={inputName} onChange={e => setInputName(e.target.value)} placeholder="상품명" />
        <input className="input-field" type="number" value={inputPrice} onChange={e => setInputPrice(e.target.value)} placeholder="가격" />
        <input className="input-field" type="number" value={inputQuantity} onChange={e => setInputQuantity(e.target.value)} placeholder="수량" />
        <button className="add-button" onClick={addItemToCart}>상품 추가</button>
      </div>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-details">${item.price} x {item.quantity}</p>
          <div className="button-group">
            <button className="quantity-button" onClick={() => incrementQuantity(item.id)}>+</button>
            <button className="quantity-button" onClick={() => decrementQuantity(item.id)}>-</button>
            <button className="remove-button" onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}