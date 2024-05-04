import React, { useEffect, useRef, useState } from 'react'

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

  //! 웹캡 설정(부수 효과)
  useEffect(() => {
    async function setupWebcam() {
      // 사용자의 웹캠에 접근하여 비디오 스트림을 얻음
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // 비디오 ref가 현재 참조하고 있는 DOM 요소가 있는 경우
      if (videoRef.current) {
        // 해당 비디오 요소의 소스로 스트림을 설정
        videoRef.current.srcObject = stream;
      }
    }

    // 위에서 정의한 웹캠 설정 함수를 호출
    setupWebcam();
  }, []);

  //! 이미지 캡쳐 함수 정의
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      // 캔버스의 2D 렌더링 컨텍스트를 가져옴
      const context = canvas.getContext('2d');
      // 컨텍스트가 성공적으로 생성되는 경우
      if (context) { 
        // 비디오의 현재 프레임을 캔버스에 그림
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // 캔버스의 내용을 png 형식의 데이터 URL로 변환
        const imageData = canvas.toDataURL('image/png');
        // 상태 변수 image 값을 업데이트하여 캡쳐된 이미지 데이터로 설정
        setImage(imageData);
      }
    }

  }

  return (
    <div>
      <h1>카메라 앱</h1>
      <video ref={videoRef} autoPlay playsInline width='320' height='240'></video>
      <button onClick={captureImage}>이미지 캡쳐</button>

      {/*  */}
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
