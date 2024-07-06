import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './ModalExample.css';

//! react-modal 패키지
// : React에서 모달을 쉽게 구현할 수 있게 도와주는 라이브러리
// >> 모달을 DOM의 루트에 직접 추가
//    , 모달이 열렸을 때 백그라운드의 다른 요소들과의 충돌을 피하도록 설계

//? react-modal 사용 방법(라이브러리 설치)
// npm i --save-dev @types/react-modal

/*
- isOpen 속성으로 모달의 열림/닫힘 상태를 제어
- onRequestClose 속성으로 모달이 닫힐 때 실행될 함수를 지정

- className과 overlayClassName 속성을 사용하여 모달과 오버레이의 스타일을 정의

+) 오버레이
: 웹 디자인과 개발에서 특정 요소나 콘텐츠를 다른 콘텐츠 위에 겹쳐서 보여주는 방식
>> 배경 차단: 모달 창이 열렸을 때 배경 콘텐츠와의 상호작용을 막아 사용자에게 현재 활성화된 모달에 집중하게 도움
*/

ReactModal.setAppElement('#root');

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="modal-container">
      <button onClick={openModal} className="open-modal-button">Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Modal Title</h2>
        <p>This is the content of the modal</p>
        <button 
          onClick={closeModal} className="close-modal-button"
        >
          Close Modal
        </button>
      </ReactModal>
    </div>
  );
};

export default ModalExample;
