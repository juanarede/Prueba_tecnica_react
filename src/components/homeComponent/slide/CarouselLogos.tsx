import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/CarouselLogos.scss'; 
import Allies from './Allies';

const CarouselLogos = () => {
  const [position, setPosition] = useState(0);
  const slideWidth = 250; 
  const totalSlides = 14; 
  const carouselWidth = slideWidth * totalSlides;
  const slideTrackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const newPosition = prevPosition - 1;
        
        if (newPosition <= -carouselWidth) {
          return newPosition + slideWidth;
        }

        return newPosition; 
      });
    }, 40); 

    return () => clearInterval(interval);
  }, [carouselWidth]); 

  const imageUrls = [
    "https://agora2030.org/wp-content/uploads/2022/12/Lendera-e1669933467143.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/cenpromype-e1669933554814.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/kUESKI-e1669933253233.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/DRIP-capital-e1669933431319.jpg",
    "https://agora2030.org/wp-content/uploads/2023/01/Center-for-inclusive-growth.jpg",
    "https://agora2030.org/wp-content/uploads/2022/10/logo.png",
    "https://agora2030.org/wp-content/uploads/2022/10/logo-1.png",
    "https://agora2030.org/wp-content/uploads/2022/10/logo-2.png",
    "https://agora2030.org/wp-content/uploads/2022/10/logo-3.png",
    "https://agora2030.org/wp-content/uploads/2022/12/Walmart-e1677101327960.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/pricesmart-e1669933319823.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/pretmex-e1669933344816.jpg",
    "https://agora2030.org/wp-content/uploads/2022/12/mercado-libre-e1677101404816.jpg"
  ];

  return (
    <>
      <Allies/>
      <div style={{ marginBottom: "6rem" }} className="slider">
        <div ref={slideTrackRef} className="slide-track" style={{ transform: `translateX(${position}px)` }}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="slide">
              <img className='logo-slide' src={imageUrl} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselLogos;
