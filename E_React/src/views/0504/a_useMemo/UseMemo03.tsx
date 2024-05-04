import React, { useMemo, useState } from 'react'

const hardCalculate = (number: number): number => {
  console.log('어려운 계산');
  // 계산 지연 시간을 생성
  //& : 조건식의 수가 증가될 수록 예제 확인이 가능
  for (let i = 0; i < 999999; i++) {} 
  return number + 10000;
}

const easyCalculate = (number: number): number => {
  console.log('쉬운 계산');
  return number + 1;
}

export default function UseMemo03() {
  const [hardNumber, setHardNumber] = useState<number>(1);
  const [easyNumber, setEasyNumber] = useState<number>(1);

  // 계산 결과를 저장하는 함수
  // const hardSum = hardCalculate(hardNumber);
  
  // useMemo를 사용하여 hardNumber가 변경될 때만 hardCalculate 함수 실행
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input 
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))} 
      />
      <span> + 10000 = {hardSum}</span>
      
      <h3>쉬운 계산기</h3>
      <input 
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))} 
      />
      <span> + 1 = {easySum}</span>
    </div>
  )
}
