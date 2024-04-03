import { useState, useEffect } from 'react';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const slides = [
        {
            id: 1,
            imageUrl: 'https://agora2030.org/wp-content/uploads/2024/01/Formando-Catalizadores_Cel-1-jpg.webp',
        },
        {
            id: 2,
            imageUrl: 'https://agora2030.org/wp-content/uploads/2024/01/Banner-cel-1-jpg.webp',
        },
    ];

    const handlePrev = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const imageWidth = Math.min(windowWidth - 40, 400); 

    return (
        <div style={{ minHeight: "78vh" }} className="pt-5 relative">
            <div style={{ scrollSnapType: 'x mandatory' }}>
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`relative transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <input className="sr-only peer" type="radio" name="carousel" id={`carousel-${slide.id}`} checked={index === currentSlide} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg transition-all duration-300">
                            <div style={{ margin: '0 auto' }}>
                                <img style={{ height: "auto", maxWidth: `${imageWidth}px`, borderRadius: '12px 12px 12px 12px' }} className="rounded-t-lg" src={slide.imageUrl} alt="" />
                            </div>
                            <div className="absolute top-1/2 w-full flex justify-between z-20">
                                <label htmlFor={`carousel-${index === 0 ? slides.length : index}`} className="inline-block text-gray-600 cursor-pointer -translate-x-2 bg-white rounded-full shadow-md active:translate-y-0.5" onClick={handlePrev}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                                    </svg>
                                </label>
                                <label htmlFor={`carousel-${index === slides.length - 1 ? 1 : index + 2}`} className="inline-block text-gray-600 cursor-pointer translate-x-2 bg-white rounded-full shadow-md active:translate-y-0.5" onClick={handleNext}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
