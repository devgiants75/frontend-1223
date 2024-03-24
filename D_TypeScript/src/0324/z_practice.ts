// z_practice.ts
{
//! 도서관 관리 시스템 구현
// Library 클래스 정의
// 1. 속성
//  books: 도서들의 정보가 저장된 배열
// 2. 생성자
//  : 초기 도서 배열을 받아 books 배열을 초기화
//  : 전달 받는 인자가 없을 경우 [] 빈 배열로 초기화
// 3. 메서드
// addBook(book: BookType): 책 추가
// removeBook(isbn: string): isbn으로 책을 찾아 제거, 해당 책이 없는 경우 메시지 출력
// findBooksByAuthor(author: string): 저자명으로 책을 찾아 배열로 반환
// listBooks(): 도서 목록 정보 출력(전체 리스트 출력)

type BookType = {
  title: string;
  author: string;
  isbn: string; // 책의 고유 번호 (전세계적으로 통용된 번호)
}

class Library {
  private books: BookType[];

  constructor(books: BookType[] = []) {
    this.books = books;
  }

  public addBook(book: BookType): void {
    // 현재 인스턴스의 책 배열에 매개변수의 book을 추가
    // 배열.push
    console.log(`${book.title}이(가) 추가 되었습니다.`)
  }

  public removeBook(isbn: string): void {
    // 배열의 findIndex메서드(콜백 함수)
    // : 책을 순회하며 매개변수의 isbn 번호와 일치할 경우 해당 요소의 인덱스 번호를 찾아옴
    // 해당 인덱스 번호가 -1인 경우(해당 isbn 번호가 존재 X)
    // : 메시지 출력
    // -1이 아닌 경우
    // : 해당 인덱스를 splice로 삭제
  }

  public findBooksByAuthor(author: string): BookType[] {
    // filter() 메서드 사용
  }

  public listBooks(): void {
    // forEach() 메서드 사용 - 전체 책 요소를 출력
  }
}


}