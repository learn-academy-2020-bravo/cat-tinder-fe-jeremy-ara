import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Hongcha from '../images/hongcha.jpg'

const Slider = (
  <AwesomeSlider
    media={[
      {
        source: Hongcha,
      },
      {
        source: Hongcha,
      },
      {
        source: Hongcha,
      },
    ]}
  />
);

export default Slider
