import React from 'react';
import Lottie from 'react-lottie';
import animationData from './multi.json';

export default function MultiAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="container lottie">
        <Lottie className=""
          options={defaultOptions}
         
        />
      </div>
    );
  }
