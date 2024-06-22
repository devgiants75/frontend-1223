import React from 'react'
import { Link } from 'react-router-dom';

export default function MyPage() {
  // 예약 리스트 데이터 (예시)
  const reservations = [
    { id: '1', name: 'Reservation 1' },
    { id: '2', name: 'Reservation 2' },
    { id: '3', name: 'Reservation 3' },
  ];

  return (
    <div>
      <h1>My Page</h1>
      <h2>Reservations</h2>
      <ul>
        {/* 예약 리스트를 반복하여 각 항목을 링크로 생성 */}
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {/* 각 예약 항목을 클릭 시 해당 예약 상세 페이지로 이동 */}
            <Link to={`/mypage/reservations/${reservation.id}`}>{reservation.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
