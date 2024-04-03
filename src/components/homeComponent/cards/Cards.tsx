import "../../../styles/Card.scss"; 
import CardsConvocatoria from "./CardsConvocatoria";



export default function Cards() {
  return (
    <>
      <div style={{ marginTop: "4rem"  }} className="flex items-center justify-center mb-5">
        <div className="max-w-7xl mx-auto px-4">
          <div style={{marginBottom:'5rem'}} className="flex flex-col sm:flex-row items-start justify-between mb-6">
            <div className="mb-4 sm:mb-0 text-wrap lg:w-1/2">
              <h2 className="text-2xl lg:text-xl font-semibold  pb-7" style={{ fontSize: '32px', color: "#19417F" }}>¿Qué hacemos?</h2>
              <p className="text-gray-700 text-sm" style={{ fontSize: '20px' }}>Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.</p>
            </div>
            <div className="flex items-center">
              <p style={{ color: "#19417F" }} className="font-bold mr-2 cursor-pointer hover-animation">Conocer más sobre nuestros programas</p>
              <img src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle.svg" alt="Flecha" className="move-up-right" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="card card1">
              <div className="img-wrapper">
                <div className="image-container">
                  <img style={{ width: "28rem" }} className="inner-img rounded-2xl  object-cover" src="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png" alt="Imagen 1" />
                </div>
              </div>
              <div style={{ padding: "30px" }} className="content mt-5">
                <h3 style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }} className="title mb-5">Emprendimientos y pequeñas empresas en crecimiento</h3>
                <p style={{ fontSize: "17px", color: '#333333' }} className="text">Ofrecemos formación empresarial, vinculación a mercados y acceso a financiamiento a emprendedores y pequeñas empresas en crecimiento en su camino hacia la sostenibilidad económica, social y ambiental.</p>
              </div>
            </div>
            <div className="card card2">
              <div className="img-wrapper">
                <img style={{ width: "28rem" }} className="inner-img rounded-2xl  object-cover" src="https://agora2030.org/wp-content/uploads/2023/07/planeacion.png" alt="Imagen 2" />
              </div>
              <div style={{ padding: "30px" }} className="content content2 mt-5">
                <h3 style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }} className="title mb-5">Ecosistema</h3>
                <p style={{ fontSize: "17px", color: '#333333' }} className="text">Contribuimos al fortalecimiento del ecosistema de emprendedores y pequeñas empresas en crecimiento a través de eventos, tales como el programa Formando Catalizadores, y el co-liderazgo de la Red de Impacto, integrada por más de 100 organizaciones de la región.</p>
              </div>
            </div>
            <div className="card card3">
              <div className="img-wrapper">
                <img style={{ width: "28rem" }} className="inner-img rounded-2xl object-cover" src="https://agora2030.org/wp-content/uploads/2023/07/empresario-levantando-la-mano-e1689204118270.png" alt="Imagen 3" />
              </div>
              <div style={{ padding: "30px" }} className="content content3 mt-5">
                <h3 style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }} className="title mb-5">Proyectos inclusivos</h3>
                <p style={{ fontSize: "17px", color: '#333333' }} className="text">Ejecutamos proyectos específicos junto a aliados con los que compartimos nuestra visión por la inclusión financiera, la equidad de género, la diversificación, resiliencia y sostenibilidad en las cadenas de valor, y la adaptación al cambio climático en la región.</p>
              </div>
            </div>
             </div>
           <CardsConvocatoria/>
        </div>
      </div>
    </>
  );
}
