import { useState, useEffect, useRef } from 'react';

export default function Impact() {

    const targetCounter1 = 2300;
    const targetCounter2 = 329;
    const targetCounter3 = 23;

    
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counting, setCounting] = useState(false); 

    const sectionRef = useRef(null);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const intersectionCallback = (entries: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entries.forEach((entry: { isIntersecting: any; }) => {
            if (entry.isIntersecting) {
                setCounting(true); 
            } else {
                setCounting(false); 
            }
        });
    };

   
    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!counting) return; 

        const interval = setInterval(() => {
      
            setCounter1(prevCounter => Math.min(prevCounter + 70, targetCounter1));
            setCounter2(prevCounter => Math.min(prevCounter + 15, targetCounter2));
            setCounter3(prevCounter => Math.min(prevCounter + 3, targetCounter3));

            if (counter1 >= targetCounter1 && counter2 >= targetCounter2 && counter3 >= targetCounter3) {
                setCounting(false);
            }
        }, 50); 

 
        return () => clearInterval(interval);
    }, [counting, counter1, counter2, counter3, targetCounter1, targetCounter2, targetCounter3]);

    return (
        <section ref={sectionRef} style={{ borderRadius: "2.6rem", padding: '100px 30px', background:'#19417F' }} className="flex justify-center items-center ">
        <div className=" text-white  sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6">
                <div className="mb-4 sm:mb-0 text-wrap lg:w-1/2">
                    <h2 className="text-2xl lg:text-xl font-semibold pb-7" style={{ fontSize: '32px', color: "#ffff" }}>Impacto</h2>
                    <p className="text-white text-sm" style={{ fontSize: '17px' }}>Nos comprometemos a la transparencia con los emprendedores y el ecosistema emprendedor en Latinoamérica alineándonos con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.</p>
                </div>
                <div className="flex items-center">
                    <p style={{ color: "#ffff" }} className="font-bold mr-2 cursor-pointer hover-animation">Ver Más</p>
                    <img src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle-1.svg" alt="Flecha" className="move-up-right" />
                </div>
            </div>
    
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:col-span-2">
                <div className="bg-white py-7 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-center">
                    <p className="text-blue-900 text-3xl mt-2 font-bold">{counter1}</p>
                    <h2 className="text-blue-900 text-lg font-semibold font-bold">Emprendedores <br /> atendidos</h2>
                </div>
                <div className="bg-white py-7 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-center">
                    <p className="text-blue-900 text-3xl mt-2 font-bold">{counter2}</p>
                    <h2 className="text-blue-900 text-lg font-semibold font-bold">Catalizadores <br /> capacitados</h2>
                </div>
                <div className="bg-white py-7 px-7 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-center">
                    <p className="text-blue-900 text-3xl mt-2 font-bold">{counter3}</p>
                    <h2 className="text-blue-900 text-lg font-semibold font-bold">Países que tenemos <br /> incidencia</h2>
                </div>
            </div>
        </div>
    </section>
  )
}
