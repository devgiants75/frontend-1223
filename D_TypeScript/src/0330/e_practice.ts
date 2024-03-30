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

// - 기능 추가
// 1. Member 클래스 확장
// : Member 클래스를 상속받는 VIPMember 클래스를 정의
// - rewardPoints(보상점수) 속성을 가짐
//   : 생성자를 통해 초기화 가능 (Member 클래스의 속성은 super())

// 2. 회원 나이 평균 계산하기
// : Membership 클래스에 getAverageAge 메서드를 추가
// - 현재 목록에 있는 모든 회원들의 나이 평균을 계산하여 반환

// 3. 비활성 회원 검색 기능을 추가
// : Membership 클래스에 filterInactiveMembers 메서드를 추가
// - 활성 상태가 아닌(active 속성값이 false) 회원들만 필터링하여 반환

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

//! Member 클래스를 상속받는 VIPMember 클래스 정의
class VIPMember extends Member {
  constructor(name: string, age: number, public rewardPoints: number, active: boolean = true) {
    // super(): 부모 클래스의 생성자를 호출
    // : 부모 클래스의 기본 속성을 초기화하는 동시에
    // : rewardPoints라는 새로운 속성을 추가
    super(name, age, active);
    this.rewardPoints = rewardPoints;
  }
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

  //? 활성 상태인 회원들만 필터링해서 반환하는 메서드
  // : active 속성이 true인 회원'들만' 새로운 배열로 만들어 반환
  filterActiveMembers(): T[] {
    // 주어진 함수(기능)의 값이 true 요소만 새로운 배열로 반환
    return this.members.filter(member => member.active);
  }

  //? 비활성 상태인 회원들만 필터링해서 반환하는 메서드
  // : active 속성이 false인 회원'들만' 새로운 배열로 만들어 반환
  filterInactiveMembers(): T[] {
    // active 속성이 false인 회원의 값이 !부정 연산을 통해
    // , true로 변경되어 반환
    return this.members.filter(member => !member.active);
  }

  //? 회원 나이 평균 계산을 하여 반환하는 메서드
  // : 각 회원들의 age 속성값을 누적하여 더한 후 반환
  getAverageAge(): number {
    // 회원이 존재하는 경우에만 누적값을 계산
    if (this.members.length === 0) return 0;
    // reduce 메서드
    // : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고
    // : , 하나의 결과값을 반환
    const totalAge = this.members.reduce((acc, member) => acc + member.age, 0);
    // 프로그래밍에서 수를 0으로 나눌 수 X
    // : if 조건식을 통해 길이가 0일 경우 계산식에 도달하지 않도록 설정
    return totalAge / this.members.length;
  }
}

//! Membership 클래스의 사용 예시
// 회원 관리 로직이 하나 생성(일반 회원 & VIP 회원 모두를 관리)
let membership = new Membership<Member>();

//? 회원을 추가하는 예시
let memberA = new Member('이승아', 28);
membership.addMember(memberA);
membership.addMember(new Member('이도경', 30, false));
membership.addMember(new Member('정주연', 26));
membership.addMember(new Member('윤동희', 22, false));

//? VIP 멤버를 회원 목록에 추가
membership.addMember(new VIPMember('전준우', 40, 500, false));
membership.addMember(new VIPMember('노진혁', 30, 100));
membership.addMember(new VIPMember('정훈', 20, 50, false));

//? '이도경' / '한동희' 을 검색 및 출력하는 예시
console.log(membership.findMember('이도경'));
// Member { name: '이도경', age: 30, active: false }
console.log(membership.findMember('한동희'));
// undefined

//? 활성 회원 필터링 및 출력하는 예시
let activeMembers = membership.filterActiveMembers();
console.log(activeMembers); // 활성 회원 목록 출력
// [
//   Member { name: '이승아', age: 28, active: true },
//   Member { name: '정주연', age: 26, active: true }
// ]

//? '이승아' 회원 제거 및 검증 예시
membership.removeMember('이승아');
console.log(membership.findMember('이승아')); // undefined

//? 모든 회원의 평균 나이 계산 및 출력 예시
console.log(membership.getAverageAge()); // 28

//? 비활성 회원 필터링 및 출력 예시
let inactiveMembers = membership.filterInactiveMembers();
console.log(inactiveMembers);
// [
//   Member { name: '이도경', age: 30, active: false },
//   Member { name: '윤동희', age: 22, active: false },
//   VIPMember { name: '전준우', age: 40, active: false, rewardPoints: 500 },
//   VIPMember { name: '정훈', age: 20, active: false, rewardPoints: 50 }
// ]

// VIP 회원들만 따로 관리하는 회원 목록
let vipMembership = new Membership<VIPMember>();
vipMembership.addMember(new VIPMember('이승아', 29, 1000));
vipMembership.addMember(new VIPMember('이도경', 30, 500, false));
vipMembership.addMember(new VIPMember('고승민', 28, 700));
vipMembership.addMember(new VIPMember('박승욱', 27, 100, false));

console.log(vipMembership.getAverageAge()); // 28.5
console.log(vipMembership.filterActiveMembers());
// [
//   VIPMember { name: '이승아', age: 29, active: true, rewardPoints: 1000 },
//   VIPMember { name: '고승민', age: 28, active: true, rewardPoints: 700 }
// ]
console.log(vipMembership.filterInactiveMembers());
// [
//   VIPMember { name: '이도경', age: 30, active: false, rewardPoints: 500 },
//   VIPMember { name: '박승욱', age: 27, active: false, rewardPoints: 100 }
// ]
}