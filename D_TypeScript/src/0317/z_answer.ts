// z_answer.ts

// ============ 유니언 =============//

// 1.
type MixedType = string | number | boolean;

let myVar: MixedType;

// string 타입 할당
myVar = "Hello, TypeScript!";
console.log(myVar);

// number 타입 할당
myVar = 2024;
console.log(myVar);

// boolean 타입 할당
myVar = true;
console.log(myVar);

// 2.
function doubleOrNothing(input: number | string): number | string {
  if (typeof input === "number") {
    return input * 2;
  } else {
    return input;
  }
}

console.log(doubleOrNothing(10)); // 20
console.log(doubleOrNothing("hello")); // "hello"

// 3.
type Admin = {
  id: number;
  isAdmin: boolean;
};

type User = {
  id: number;
  username: string;
};

type Person = Admin | User;

function identifyPerson(person: Person) {
  if ("isAdmin" in person) {
    console.log("This person is an Admin.");
  } else if ("username" in person) {
    console.log("This person is a User.");
  }
}

const adminPerson: Person = { id: 1, isAdmin: true };
const userPerson: Person = { id: 2, username: "typescriptUser" };

identifyPerson(adminPerson); // This person is an Admin.
identifyPerson(userPerson); // This person is a User.

// ============ 인터섹션 =============//

// 1.
// 아래 정답 주석 해제 후 사용
// type Employee = Person & ContactDetails;

// 2.
type Car = Vehicle & Engine;

function createCar(vehicle: Vehicle, engine: Engine): Car {
  return { ...vehicle, ...engine };
}

// 3.
type TeamMemberWithProject = TeamMember & Project;

function assignProjectToTeamMember(
  member: TeamMember,
  project: Project
): TeamMemberWithProject {
  return { ...member, ...project };
}
