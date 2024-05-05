import React, { useCallback, useRef, useState } from 'react'

//! useCallback, useState, useEffect, useRef
// : 그림판 구현 프로젝트

export default function WebcamDrawingApp() {
  // 그리기를 위한 캔버스 ref 객체 생성
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //! 사용자의 변경 상태를 저장하는 useState 훅 사용
  // 1) 그리기 상태를 관리
  // : 마우스의 움직임 상태를 관리(클릭, 움직임, 종료)
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  // 2) 현재 브러시의 색상을 관리 - 색상은 문자열로 표기
  const [brushColor, setBrushColor] = useState<string>('#000000');
  // 3) 현재 브러시의 크기를 관리
  const [brushSize, setBrushSize] = useState<number>(5);
  // 4) 브러시 모양을 관리
  // : CanvasLineCap 타입 - 둥근/직각
  const [brushShape, setBrushShape] = useState<CanvasLineCap>('round');
  // 5) 그리기 모드를 관리
  // : 그리기 모드, 지우기 모드의 상태를 관리
  const [drawingMode, setDrawingMode] = useState<boolean>(true);


  //! 그리기를 시작할 때 호출되는 함수
  // : 컴포넌트 렌더링 시에 참조된 값으로 고정
  const startDrawing = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    // 이벤트로부터 마우스의 위치를 가져오기
    // : 해당 캔버스를 기준으로 x, y축의 값으로 가져오기
    const { offsetX, offsetY } = event.nativeEvent;
    // HTML5 캔버스 요소에서 2d 작업을 할 수 있도록 내용값을 가져옴
    //& current?
    // : 옵셔널 체이닝 - 해당 값이 null 또는 undefined 인 경우 뒤의 메소드를 호출하지 않고 undefined를 반환
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.beginPath(); // 새로운 경로를 시작
      context.moveTo(offsetX, offsetY); // 마우스의 위치로 경로를 이동
      setIsDrawing(true); // 그리기 상태를 true로 설정
    }
  }, []);
  
  //! 마우스를 움직일 때 호출되는 함수: 그림이 그려짐
  const draw = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return; // 그리기 상태가 아니라면 함수 종료

    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current?.getContext('2d');

    if (context) {
      context.lineTo(offsetX, offsetY); // 현재 경로에 선을 추가
      context.strokeStyle = drawingMode ? brushColor : '#ffffff' // 선의 색상을 설정
      context.lineWidth = brushSize; // 선의 너비 설정
      context.lineCap = brushShape; // 선의 끝 모양 설정
      context.stroke(); // 경로를 그림
    }
  }, [isDrawing, brushColor, brushSize, brushShape, drawingMode]);
  
  //! 그리기를 멈출 때 호출되는 함수
  const stopDrawing = useCallback(() => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.closePath(); // 현재 경로를 닫기
    }
    setIsDrawing(false); // 그리기 상태를 false 설정
  }, []); 
  
  const saveDrawing = useCallback(() => {
    if(canvasRef.current) {
      // 캔버스의 내용을 이미지로 변환
      const image = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      // 링크의 href로 이미지 URL을 설정
      link.href = image;
      // 다운로드할 파일 이름을 설정
      link.download = 'drawing.png';
      // 링크를 DOM에 추가
      document.body.appendChild(link);
      // 링크를 클릭하여 이미지를 다운로드
      link.click();
      // 링크를 DOM에서 제거
      document.body.removeChild(link);
    }
  }, []);
  

  return (
    <div>
      {/* 캔버스 컴포넌트 */}
      <canvas 
        ref={canvasRef} // 캔버스 참조 설정
        onMouseDown={startDrawing} // 마우스를 누를 때 함수 호출
        onMouseMove={draw} // 마우스를 움직일 때 함수 호출
        onMouseUp={stopDrawing} // 마우스 버튼을 뗄 때 함수 호출
        onMouseLeave={stopDrawing} // 마우스가 캔버스를 벗어날 때 함수 호출
        width={800}
        height={600}
      />
      <div>
        {/* 색상 선택 입력 필드 */}
        <input 
          type="color" 
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
        {/* 브러시 크기 조절 입력 필드 */}
        <input 
          type="range" // 숫자 값을 받아오는 타입
          min='1'
          max='10'
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
        />
        {/* 브러시 모양 선택 드롭다운 */}
        <select
          value={brushShape}
          onChange={(e) => setBrushShape(e.target.value as CanvasLineCap)}
        >
          <option value="round">Round</option>
          <option value="square">Square</option>
        </select>
        {/* 그리기/지우기 모드 전환 버튼 */}
        <button
          onClick={() => setDrawingMode(!drawingMode)}
        >
          {drawingMode ? 'Erase' : 'Draw'}
        </button>
        {/* 그림 저장 버튼 */}
        <button
          onClick={saveDrawing}
        >
          그림 저장
        </button>
      </div>
    </div>
  )
}
