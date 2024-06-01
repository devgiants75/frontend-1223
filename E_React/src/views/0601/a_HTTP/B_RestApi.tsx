import React from 'react'
/*
1. RESTful API의 정의와 설계 원칙
- RESTful API는 웹 기술과 HTTP 프로토콜을 사용하여 서버와 클라이언트 간의 통신을 구현하는 아키텍처 스타일입니다.
- 이는 리소스 기반의 통신을 중심으로 하여 설계 원칙에 따라 유연하고 확장 가능한 웹 서비스를 제공합니다.

설계 원칙:
- Client-Server 분리: 클라이언트와 서버는 독립적으로 작동하며, 서로의 의존성이 적어야 합니다.
- 무상태성 (Stateless): 모든 요청은 필요한 모든 정보를 자체적으로 포함해야 하며, 서버에 상태 정보를 저장하지 않습니다.
- 캐시 가능성 (Cacheable): 응답은 캐시가 가능해야 하고, 서버 응답은 캐시 가능 여부를 명시해야 합니다.
- 계층화된 시스템 (Layered System): 클라이언트는 요청이 네트워크의 어느 계층을 통해 처리되는지 알 수 없어야 합니다.
- Code on demand (optional): 필요에 따라 서버는 클라이언트에게 실행 가능한 코드를 제공할 수 있습니다.
- Uniform Interface: 인터페이스는 일관성 있게 설계되어야 하며, 이는 통신의 단순화와 상호 운용성을 보장합니다.

2. URI 설계 및 자원 지향 아키텍처
- URI는 자원을 명확하게 지칭해야 하며, 간결하고 이해하기 쉬운 경로로 설계됩니다.
- 예: 사용자 정보에 대한 접근은 /users, 특정 사용자는 /users/{id}로 표현됩니다.
- HTTP 메소드 (GET, POST, PUT, DELETE)를 사용하여 자원을 조작합니다.

+) 리소스(자원)은 명사로 표현, 상태나 동작을 나타내는 동사는 사용X

실습 예제:
- 책 목록 조회: GET /books
- 책 추가: POST /books
- 책 정보 수정: PUT /books/{id}
- 책 삭제: DELETE /books/{id}
*/

export default function B_RestApi() {
  return (
    <div>B_RestApi</div>
  )
}
