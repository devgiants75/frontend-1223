import React from 'react'

import ImageSlider from './ImageSlider';import ImageSliderAuto from './ImageSliderAuto';
;

export default function ImageSliderApp() {
  const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
    'https://via.placeholder.com/800x400?text=Image+4',
    'https://via.placeholder.com/800x400?text=Image+5',
    'https://via.placeholder.com/800x400?text=Image+6',
    'https://via.placeholder.com/800x400?text=Image+7',
    'https://via.placeholder.com/800x400?text=Image+8',
    'https://via.placeholder.com/800x400?text=Image+9',
    'https://via.placeholder.com/800x400?text=Image+10'
  ];

  return (
    <div>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
      <ImageSliderAuto images={images} />
    </div>
  );
}
