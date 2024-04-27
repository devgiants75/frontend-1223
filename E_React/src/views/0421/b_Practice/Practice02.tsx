import React, { CSSProperties, useState } from "react";
//! 온라인 투표 시스템

//? 문제 요구 사항
// - 후보자 목록은 객체의 배열로 관리
// - 각 객체는 name과 votes 두 가지 키를 가짐
// - 사용자는 후보자 목록 중 하나를 선택하고 투표
// - 투표 버튼을 누르면 선택된 후보자의 투표 수가 증가

//! 후보자 인터페이스 정의
interface Candidate {
  name: string; // 후보자의 이름
  votes: number; // 후보자의 득표수
}

export default function Practice02() {
  //! 데이터 상태 관리
  // 후보자 목록을 상태로 관리
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: "이승아", votes: 0 },
    { name: "이도경", votes: 0 },
    { name: "정주연", votes: 0 },
  ]);

  // 새로 입력할 후보자의 이름을 관리하는 상태
  const [newCandidateName, setNewCandidateName] = useState<string>("");

  // 선택된 후보자의 이름을 관리하는 상태
  const [selectedCandidate, setSelectedCandidate] = useState<string>("");

  //! 이벤트 핸들러 정의

  //? 새 후보자를 목록에 추가하는 함수 정의
  // : 입력된 이름이 공백이 아니고 중복되지 않을 경우 추가
  const addCandidate = () => {
    // some()함수
    // : 배열의 일부 요소가 주어진 테스트 함수를 만족하는지 여부를 검사하는 메서드
    // : 하나라도 일치하는 요소가 있을 경우 true를 반환
    if (
      newCandidateName.trim() !== "" &&
      !candidates.some((c) => c.name === newCandidateName)
    ) {
      setCandidates([...candidates, { name: newCandidateName, votes: 0 }]);
      setNewCandidateName("");
    }
  };

  //? 투표 함수 정의
  // 선택된 후보자의 득표수를 1 증가
  const vote = () => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.name === selectedCandidate
          ? {
              ...candidate,
              votes: candidate.votes + 1,
            }
          : candidate
      )
    );
  };

  //? 선택된 후보자를 목록에서 삭제하는 함수
  const deleteCandidate = () => {
    // 전체 후보자 목록에서 선택된 후보자의 이름과
    // 순회되는 값의 이름이 다를 경우 새로운 배열로 반환
    setCandidates(
      candidates.filter((candidate) => candidate.name !== selectedCandidate)
    );

    // 선택된 후보자 상태를 초기화
    setNewCandidateName("");
  };

  return (
    <>
      <div
        style={styles.container}
      >
        <h3>온라인 투표 시스템</h3>
        <div>
          {" "}
          {/* 후보자 추가 입력과 추가 버튼을 포함하는 영역 */}
          <input
            type="text"
            value={newCandidateName}
            onChange={(e) => setNewCandidateName(e.target.value)}
            placeholder="새 후보자의 이름을 입력해주세요."
            style={{
              width: "300px",
              height: "40px",
              margin: "10px",
            }}
          />
          <button onClick={addCandidate}>후보자 추가</button>
        </div>

        {/* 후보자 선택 드롭다운과 투표, 삭제 버튼을 포함하는 div */}
        <div>
          <select
            value={selectedCandidate}
            onChange={(e) => setSelectedCandidate(e.target.value)}
            style={{
              width: "310px",
              height: "40px",
              margin: "10px",
            }}
          >
            {/* 초기 선택지 */}
            <option value="">===후보자를 선택해주세요===</option>
            {candidates.map((candidate, index) => (
              // 후보자 이름을 선택지로 순회
              <option key={index} value={candidate.name}>
                {candidate.name}
              </option>
            ))}
          </select>
          {/* 선택된 후보자가 없으면 비활성화되는 투표&삭제 버튼 */}
          {/*  
            - 만약 선택된 후보자가 없는 경우 selectedCandidate 변수에 초기값의 지정 X
              : 해당 변수가 null 또는 undefined가 되지 않음을 명시적으로 전달
          */}
          <button onClick={vote} disabled={!selectedCandidate}>
            투표하기
          </button>
          <button onClick={deleteCandidate} disabled={!selectedCandidate}>
            후보자 삭제
          </button>
        </div>
      </div>

      {/* 후보자와 득표수의 현황 */}
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
        }}
      >
        {candidates.map((candidate, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {/*  후보자 : N표 */}
            {candidate.name} : {candidate.votes}
          </li>
        ))}
      </ul>
    </>
  );
}

interface Styles {
  [key: string]: CSSProperties;
}

// jsx의 style 속성
// : style 속성이 객체로 전달'
const styles: Styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  }
};
