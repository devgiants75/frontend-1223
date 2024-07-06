import React from 'react'
import ImageSlider from './ImageSlider';
import cat01 from './cat01.jpg';
import cat02 from './cat02.jpg';
import dog01 from './dog01.jpg';
import dog02 from './dog02.jpg';
import dog03 from './dog03.jpg';

export default function SliderApp() {
  const images = [
    cat01,
    cat02,
    dog01,
    dog02,
    dog03,
  ];

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
}
