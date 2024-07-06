import React from 'react'

import ImageSlider from './ImageSlider';

import cat01 from '../Slider/cat01.jpg';
import cat02 from '../Slider/cat02.jpg';
import dog01 from '../Slider/dog01.jpg';
import dog02 from '../Slider/dog02.jpg';
import dog03 from '../Slider/dog03.jpg';

export default function ButtonSliderApp() {
  const images = [
    cat01,
    cat02,
    dog01,
    dog02,
    dog03,
  ];

  return (
    <div className="App">
      <h1>Button Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  )
}
