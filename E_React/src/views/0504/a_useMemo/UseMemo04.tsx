import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo04() {
  const [number, setNumber] = useState<number>(1);
  const [isLotte, setIsLotte] = useState<boolean>(true);

  // const withoutMemo = {
  //   loveTeam: isLotte ? '롯데' : '기아'
  // };

  const withMemo = useMemo(() => {
    return {
      loveTeam: isLotte ? '롯데' : '기아'
    };
  }, [isLotte]);
  

  // useEffect(() => {
  //   console.log('useEffect 호출 (useMemo 사용 X)');
  // }, [withoutMemo]);

  useEffect(() => {
    console.log('useEffect 호출 (useMemo 사용)');
  }, [withMemo]);

  return (
    <div>
      <h2>1년에 야구장을 몇 번 가시나요?</h2>
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <hr />

      <h2>응원하는 야구팀은?</h2>
      <p>야구팀(useMemo X): {withMemo.loveTeam}</p>
      <button onClick={() => setIsLotte(!isLotte)}>변경</button>
    </div>
  )
}
