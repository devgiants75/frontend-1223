import React from 'react'
import { useParams } from 'react-router-dom';

export default function ReservationDetail() {
  // URL에서 reservationId 파라미터를 추출
  const { reservationId } = useParams<{ reservationId: string }>();

  return (
    <div>
      <h1>Reservation Detail</h1>
      {/* 추출한 reservationId를 화면에 표시 */}
      <p>Reservation ID: {reservationId}</p>
      {/* 예약 상세 정보를 표시하는 로직을 추가할 수 있습니다 */}
    </div>
  );
}

