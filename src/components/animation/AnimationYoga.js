import React from 'react';
import Lottie from 'react-lottie';
import animationData from './coolAnimation.json';

export default function AnimationYoga() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="container">
        <Lottie 
          options={defaultOptions}
          height={250}
          width={250}
        />
      </div>
    );
  }
