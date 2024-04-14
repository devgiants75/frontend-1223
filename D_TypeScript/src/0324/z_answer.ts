//! Library 클래스 정의
class Library {
  // books 배열: 비공개(private) 속성, 도서 정보를 저장
  // 각 도서는 title, author, isbn을 포함한 객체
  private books: { title: string; author: string; isbn: string }[];

  //! 생성자 함수
  // : books 배열을 매개변수 받는 함수
  // : 기본값으로 빈 배열을 할당
  // : Library 인스턴스 생성 시 초기 도서 목록을 선택적으로 설정 가능
  constructor(books: { title: string; author: string; isbn: string }[] = []) {
    this.books = books;
  }

  //! addBook 메서드
  // : 새 도서 객체를 받아 books 배열에 추가
  // : 도서 추가 시 콘솔에 추가된 도서의 제목을 출력하여 확인 가능
  public addBook(book: { title: string; author: string; isbn: string }): void {
    this.books.push(book);
    console.log(`Book titled "${book.title}" added.`);
  }

  //! removeBook 메서드
  // : ISBN을 매개변수로 받아 해당 ISBN을 가진 도서를 books 배열에서 찾아 제거
  // : 도서를 찾으면 배열에서 제거하고, 찾지 못하면 콘솔에 메시지를 출력
  public removeBook(isbn: string): void {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Book with ISBN ${isbn} removed.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }

  //! findBooksByAuthor 메서드
  // : 저자명을 매개변수로 받아 해당 저자의 모든 도서를 books 배열에서 찾아 반환
  // : filter() - 사용하여 저자명이 일치하는 도서만 새 배열로 만들어 반환
  public findBooksByAuthor(author: string): { title: string; author: string; isbn: string }[] {
    return this.books.filter(book => book.author === author);
  }

  //! listBooks 메서드
  // : books 배열에 저장된 모든 도서의 정보를 콘솔에 출력
  // : forEach() - 각 도서의 제목, 저자, ISBN 정보를 출력
  public listBooks(): void {
    console.log("Listing all books:");
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });
  }
}
