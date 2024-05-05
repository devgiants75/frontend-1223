import React, { useReducer, useState } from 'react'
import './Reducer04.css';

//! CartItem 타입 정의
// : 쇼핑 카트에 들어갈 아이템 속성 정의
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//! CartState 타입
// : 장바구니 타입을 구축
type CartState = CartItem[];

//! CartAction 타입
// : 쇼핑 카트에서 수행 가능한 액션들 정의
type CartAction =
  | { type: 'add', item: CartItem }
  | { type: 'remove', id: number }
  | { type: 'increment', id: number }
  | { type: 'decrement', id: number }

//! cartReducer 함수
// : 상태와 액션을 받아 새로운 상태를 반환
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add':
      const exists = state.find(item => item.id === action.item.id);
      if (exists) {
        // 아이템이 이미 존재한다면 수량만 증가
        return state.map(item => 
          item.id === action.item.id ? { ...item, quantity: item.quantity + 1} : item
        );
      }
      // 아이템이 존재하지 않을 경우: 새 아이템 추가
      return [...state, { ...action.item, quantity: 1}];
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
      // : Math.max(최대값 설정)
      // EX) Math.max(0, 수량)
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      );
    default:
      return state;
  }
}
  
export default function Reducer04() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // 상품 추가를 위한 input 창 관리
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
  }

  const incrementQ = (id: number) => {
    dispatch({ type: 'increment', id })
  }
  
  const decrementQ = (id: number) => {
    dispatch({ type: 'decrement', id })
  }
  
  const removeItemFromCart = (id: number) => {
    dispatch({ type: 'remove', id })
  }

  return (
    <div>
      <h1>장바구니 구현</h1>
      <div className="cart-container">
        <div className="input-group">
          <input 
            type="text" className="input-field" 
            placeholder='상품 ID' value={inputId}
            onChange={e => setInputId(e.target.value)}
          />
          <input 
            type="text" className="input-field" 
            placeholder='상품명' value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
          <input 
            type="text" className="input-field" 
            placeholder='가격' value={inputPrice}
            onChange={e => setInputPrice(e.target.value)}
          />
          <input 
            type="text" className="input-field" 
            placeholder='수량' value={inputQuantity}
            onChange={e => setInputQuantity(e.target.value)}
          />
          <button onClick={addItemToCart}>상품 추가</button>
        </div>

        {cart.map(item => (
          <div className='cart-item' key={item.id}>
            <h3 className="item-name">{item.name}</h3>
            <p className="item-details">${item.price} X {item.quantity}</p>
            <div className='button-group'>
              <button className="quantity-button" onClick={() => incrementQ(item.id)}>+</button>
              <button className="quantity-button" onClick={() => decrementQ(item.id)}>-</button>
              <button className='remove-button' onClick={() => removeItemFromCart(item.id)}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
