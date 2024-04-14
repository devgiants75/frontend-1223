import React from 'react'

export default function JSX03() {
  const url = 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_640.jpg';

  const baseUrl = 'https://cdn.pixabay.com/photo/';

  const dog = {
    date: '2019/08/07/',
    description: '14/11/',
    imageId: 'dog-4390885_640',
    name: '리트리버',
    theme: {
      backgroundColor: 'gray',
      color: 'pink'
    },
    imageTheme: {
      width: '200px',
      height: '150px'
    }
  }

  return (
    <div style={dog.theme}>
      <p>{dog.name}'s Picture</p>
      {/* JS의 표현식을 중괄호 내에서 작성 */}
      <img 
        src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'} 
        alt={dog.name} 
        width={dog.imageTheme.width} 
        height={dog.imageTheme.height}
      />
      <hr />
    </div>
  )
}
