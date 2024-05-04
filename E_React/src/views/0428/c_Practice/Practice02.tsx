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

  useEffect(() => {  // 컴포넌트가 마운트될 때 실행될 효과를 정의
    async function setupWebcam() {  // 비동기 함수로 웹캠 설정
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });  // 사용자의 웹캠에 접근하여 비디오 스트림 얻기
      if (videoRef.current) {  // 비디오 ref가 현재 참조하고 있는 DOM 요소가 있으면,
        videoRef.current.srcObject = stream;  // 해당 비디오 요소의 소스로 스트림을 설정
      }
    }
    setupWebcam();  // 위에서 정의한 웹캠 설정 함수를 호출
  }, []);  // 빈 의존성 배열을 넣어 컴포넌트 마운트 시에만 이 효과를 실행

  const captureImage = () => {  // 이미지 캡처 함수를 정의
    const video = videoRef.current;  // 현재 비디오 요소에 접근
    const canvas = canvasRef.current;  // 현재 캔버스 요소에 접근
    if (video && canvas) {  // 비디오와 캔버스가 둘 다 있으면,
      const context = canvas.getContext('2d');  // 캔버스의 2D 렌더링 컨텍스트를 가져오기
      if (context) {  // 컨텍스트가 성공적으로 생성되면,
        context.drawImage(video, 0, 0, canvas.width, canvas.height);  // 비디오의 현재 프레임을 캔버스에 그리기
        const imageData = canvas.toDataURL('image/png');  // 캔버스의 내용을 PNG 형식의 데이터 URL로 변환
        setImage(imageData);  // 상태 변수 image를 업데이트하여 캡처된 이미지 데이터로 설정
      }
    }
  };

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
