// module 디렉터리 내 파일 생성
// module_import.ts

//? b_module.ts에서 정의된 add, subtract 함수를 사용
// - 일반 export(내보내기)된 기능 사용
// - import 뒤의 중괄호 내에 내보내기된 기능의 이름을 동일하게 사용
import { add, subtract } from '../b_module';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

//? b_module.ts에서 정의된 Calculator 클래스를 사용
// - import 시 중괄호를 제외하는 경우는 default 기능임을 자동으로 인식
// - default 기능은 이름을 사용하는 파일에서 임의 지정이 가능

import Calc from '../b_module';
const calculator = new Calc();
console.log(calculator.add(5, 6)); // 11
