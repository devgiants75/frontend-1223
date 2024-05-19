import React from 'react'
import { useSearchParams } from 'react-router-dom';

//! 제품에 대한 인터페이스 정의
interface Product {
  id: number;
  name: string;
  category: string;
}

//! 예시 제품 데이터 배열 정의
// : 각 제품은 Product 인터페이스 구조를 가짐
const products: Product[] = [
  { id: 1, name: 'Product A', category: 'Category 1' },
  { id: 2, name: 'Product B', category: 'Category 1' },
  { id: 3, name: 'Product C', category: 'Category 2' },
  { id: 4, name: 'Product D', category: 'Category 1' },
  { id: 5, name: 'Product E', category: 'Category 2' },
];

export default function QueryParams02() {
  //! useSearchParams 훅 사용 - URL의 쿼리 파라미터 관리
  const [searchParams, setSearchParams] = useSearchParams();

  //! category 쿼리 파라미터 값을 읽어오기
  // : 해당 쿼리의 키 값이 없을 경우 빈 문자열 사용
  const filter = searchParams.get('category') || '';

  //& 선택 상자의 값이 변경될 때 호출되는 이벤트 핸들러
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //! 선택된 카테고리에 따라 쿼리 파라미터를 업데이트
    setSearchParams({ category: e.target.value });
  };

  //& 제품 데이터를 필터링
  // : 선택된 카테고리가 없으면 모든 제품을
  // : , 있으면 해당 카테고리의 제품만을 표시
  const filteredProducts = products.filter(product =>
    filter === '' || product.category === filter
  );

  return (
    <div>
      <h3>Product List</h3>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>

      <ul>
        {/* 
          위에서 선택된 값에 따라
          , 필터링된 제품 목록을 렌더링
        */}
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  )
}
