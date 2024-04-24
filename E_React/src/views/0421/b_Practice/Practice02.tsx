import React, { useState } from 'react';

//! 온라인 투표 시스템

//? 문제 요구 사항
// - 후보자 목록은 객체의 배열로 관리
// - 각 객체는 name과 votes 두 가지 키를 가짐
// - 사용자는 후보자 목록 중 하나를 선택하고 투표
// - 투표 버튼을 누르면 선택된 후보자의 투표 수가 증가

interface Candidate {
  name: string;
  votes: number;
}

const Practice02: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: 'Alice', votes: 0 },
    { name: 'Bob', votes: 0 },
    { name: 'Charlie', votes: 0 }
  ]);
  const [selectedCandidate, setSelectedCandidate] = useState<string>('');
  const [newCandidateName, setNewCandidateName] = useState<string>('');

  const vote = () => {
    setCandidates(candidates.map(candidate =>
      candidate.name === selectedCandidate ? { ...candidate, votes: candidate.votes + 1 } : candidate
    ));
  };

  const addCandidate = () => {
    if (newCandidateName.trim() !== '' && !candidates.some(c => c.name === newCandidateName)) {
      setCandidates([...candidates, { name: newCandidateName, votes: 0 }]);
      setNewCandidateName('');
    }
  };

  const deleteCandidate = () => {
    setCandidates(candidates.filter(candidate => candidate.name !== selectedCandidate));
    setSelectedCandidate('');  // Reset the selection
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h3>온라인 투표 시스템</h3>
      <div>
        <input
          type="text"
          value={newCandidateName}
          onChange={(e) => setNewCandidateName(e.target.value)}
          placeholder="새 후보자 이름 입력"
          style={{ width: '300px', height: '40px', margin: '10px' }}
        />
        <button onClick={addCandidate}>후보자 추가</button>
      </div>

      <div>
        <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)} style={{ width: '310px', height: '40px', margin: '10px' }}>
          <option value="">후보자를 선택하세요</option>
          {candidates.map((candidate, index) => (
            <option key={index} value={candidate.name}>{candidate.name}</option>
          ))}
        </select>
        <button onClick={vote} disabled={!selectedCandidate}>투표하기</button>
        <button onClick={deleteCandidate} disabled={!selectedCandidate}>후보자 삭제</button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {candidates.map((candidate, index) => (
          <li key={index} style={{ margin: '10px' }}>
            {candidate.name}: {candidate.votes}표
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice02;
