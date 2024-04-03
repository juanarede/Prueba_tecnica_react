import React, { useState, useEffect, useRef } from 'react';



export default function OurFinanciersSlide() {

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
      "https://agora2030.org/wp-content/uploads/2023/01/MEDA.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/INBIA.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/EYElliance.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/citibanamex.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/Yunus.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/Holland-Embassy.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/IREX.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/Palladium.jpg",
      "https://agora2030.org/wp-content/uploads/2023/01/Tawingo-fund.jpg",
      "https://agora2030.org/wp-content/uploads/2022/12/HIP.png",
      "https://agora2030.org/wp-content/uploads/2022/12/New-Venture-Fund.png",
      "https://agora2030.org/wp-content/uploads/2022/12/Target-Foundation.jpeg",
      "https://agora2030.org/wp-content/uploads/2022/12/BID-Lab-Color_SPA.png"
    ];

 
  return (
    <>
    <div style={{ marginTop: "8rem", marginBottom: '5rem', textAlign: 'left' }} className="flex items-center justify-center mb-5">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl lg:text-xl font-semibold pb-7" style={{ fontSize: '32px', color: "#19417F", textAlign: 'left', margin: '0' }}>Nuestros Financiadores</h2>
    </div>
  </div>
  
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
  
  
  )
}
