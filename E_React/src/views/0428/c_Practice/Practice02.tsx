import React, { useRef, useState } from 'react'

//! 간단한 사진 캡쳐 & 표시 기능
// - 웹캠으로 사진을 찍고, 찍은 사진을 화면에 표시
// - useState, useRef, useEffect


export default function Practice02() {
  // 웹캠의 비디오 스트림을 저장하기 위한 state
  const [image, setImage] = useState<string | null>(null);

  // 비디오 HTML 요소에 접근하기 위한 ref
  const videoRef = useRef<HTMLVideoElement>(null);
  // 캔버스 HTML 요소에 접근하기 위한 ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <h1>카메라 앱</h1>
      <video ref={videoRef} autoPlay playsInline width='320' height='240'></video>
      <button onClick={captureImage}>이미지 캡쳐</button>
      <canvas ref={canvasRef} width='320' height='240' style={{ display: 'none'}}></canvas>
      {image && ( // image 상태변수가 null이 아닌 경우
        <div>
          <h2>캡쳐된 이미지</h2>
          <img src={image} alt="캡쳐된 이미지" style={{ width: '320', height: '240' }}/>
        </div>
      )}
    </div>
  )
}
