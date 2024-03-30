// e_practice.ts
{
//! 제네릭, 클래스, 배열 메서드를 활용한 회원 관리 프로그램 구현

// 요구사항 정리(비즈니스 로직)

//? 회원 정보
// : name(이름), age(나이), active(활성 상태)의 속성을 가짐
// - active 속성은 기본값으로 true값을 가짐(회원이 기본적으로 활성 상태)

//? 회원 관리 프로그램
// : 회원을 추가(addMember)
// : 회원을 검색(findMember)
// : 회원을 제거(removeMember)
// : 활성화된 회원만 필터링(filterActiveMember)

//! 회원 정보를 관리하기 위한 Member 클래스 정의
class Member {
  // 생성자의 매개변수에 접근제한자를 지정하는 경우
  // : 해당 매개변수가 클래스의 속성으로 지정
  constructor(
    public name: string, 
    public age: number, 
    public active: boolean = true 
    // 클래스의 속성에 기본값 지정, 기본 매개변수
  ) {}
}

//! 회원 관리 기능을 담당하는 Membership 클래스 정의
// : 제네릭을 사용하여 정의
// - Member 클래스 또는 그 자식 클래스의 인스턴스만을 회원으로 관리
//   : Member 객체의 리스트를 관리
class Membership<T extends Member> {
  private members: T[] = []; // Member 객체들을 저장할 배열

  //? 새로운 멤버를 추가하는 메서드
  // : 회원 리스트에 매개변수로 받은 회원 객체를 추가
  addMember(member: T) {
    this.members.push(member);
  }

  //? 이름을 기준으로 회원을 검색하는 메서드
  // : 해당 이름의 회원이 있으면 그 객체를
  //   , 없으면 undefined를 반환
  findMember(name: string): T | undefined {
    // find 메서드
    // : 주어진 함수를 만족하는 첫 번째 요소 값을 반환
    return this.members.find(member => member.name === name);
  }

  //? 특정 이름을 가진 회원을 리스트에서 제거
  // : 해당 회원을 찾아서 있으면 그 위치를 기반으로 배열에서 제거
  // findIndex 메서드
  // : 주어진 함수를 만족하는 첫 번째 요소의 인덱스값을 반환
  // : 주어진 함수를 만족하는 값이 없을 경우 -1을 반환
  removeMember(name: string): void {
    const index = this.members.findIndex(member => member.name === name);
    if (index !== -1) { // 해당 이름의 회원이 존재
      // splice 메서드
      // : 배열에서 요소를 추가하거나 제거하는 기능
      // 첫 번째 인자: 변경을 시작할 배열의 인덱스
      // 두 번째 인자: 제거할 요소의 수
      this.members.splice(index, 1);
    }
  }
}



}