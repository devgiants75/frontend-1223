import React, { useCallback, useState } from 'react'

//! 장바구니 로직 구현

//& 기능 정리
// - 상품 추가, 상품 수정, 상품 제거

//& 상품 구성
// - 상품 고유 번호 (id), 상품 이름(name), 상품 가격(price), 상품 개수(quantity)

//! 상품 타입 명시
type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//! 장바구니 로직을 구현하는 커스텀 훅
const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addItem = useCallback(() => {
    // 해당 장바구니 내에 해당 아이템이 존재하는 경우
    // : 수량만 증가

  }, []);

  const updateItemQuantity = useCallback(() => {

  }, []);

  const removeItem = useCallback(() => {

  }, []);

  return { cartItems, addItem, updateItemQuantity, removeItem };
}

export default function Cart() {

  // 사용자 정의 장바구니 로직 가져오기 - 구조 분해 할당

  // 수정을 위한 input 상태 관리 (name, price)

  const handleAddItem = () => {

  }

  return (
    <div>
      <form onSubmit={handleAddItem}>
        {/* 상품 이름과 가격을 입력 받아서 제품 추가 */}
      </form>

      {/* 장바구니 데이터 출력 */}
      <ul>
        <li>
          아이템 이름 - 아이템 가격 - 아이템 수량
          <button>수량 증가</button>
          <button>수량 감소</button>
          <button>제거</button>
        </li>
      </ul>
    </div>
  )
}
