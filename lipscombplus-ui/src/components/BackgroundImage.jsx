import React from 'react'
import '../stylecomponents/backgroundimage.css';
import background from '../assets/Dark_GradientDark_Gradient.jpg'

export default function BackgroundImage() {
  return (
    <div className='backgroundimage_container'>
        <img src={background} alt='background' />
    </div>
    )
}


