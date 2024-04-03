
export default function CardsConvocatoria() {
  return (
      <div style={{ marginTop: "10rem" }}>
          <div className="mb-4 sm:mb-0 text-wrap">
              <h2 className="text-2xl lg:text-xl font-semibold pb-7" style={{ fontSize: '32px', color: "#19417F", left: "-1rem", marginBottom: '2rem' }}>Convocatorias abiertas y novedades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            <div className="card relative bg-white overflow-hidden card1 md:col-span-1 lg:col-span-1">
                <div className="img-wrapper relative">
                    <img style={{ height: "20rem" }} className="w-full object-cover object-center rounded-2xl" src="https://agora2030.org/wp-content/uploads/2023/03/Juntas-Contamos-portada-1-jpg.webp" alt="Imagen 1" />
                    <div className="text-overlay absolute top-3 left-3 bg-gray-700 bg-opacity-70 p-2 rounded">
                        <h4 className="text-sm font-semibold text-white">CONVOCATORIA ABIERTA</h4>
                    </div>
                </div>
                <div className="text-wrapper p-4">
                    <h3 className="title mb-2" style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }}>Programa Juntas Contamos</h3>
                    <p className="text" style={{ fontSize: "17px", color: '#333333' }}>Oportunidad para mujeres empresarias en México, Guatemala, El Salvador y Honduras. Juntas Contamos consta de tres programas dirigidos a 3 perfiles diferentes de empresarias.</p>
                    <button id="button" className="bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-full py-2 px-4 mt-4">CONOCER MÁS</button>
                </div>
            </div>
            <div className="card relative bg-white overflow-hidden card2 md:col-span-2 lg:col-span-1">
                <div className="img-wrapper relative">
                    <img className="w-full object-cover object-center rounded-2xl" src="https://agora2030.org/wp-content/uploads/2024/03/Francis-Castillo-1536x1203.webp" alt="Imagen 2" />
                    <div className="text-overlay absolute top-3 left-3 bg-gray-700 bg-opacity-70 p-2 rounded">
                        <h4 className="text-sm font-semibold text-white">BLOG</h4>
                    </div>
                </div>
                <div className="text-wrapper p-4">
                    <h3 className="title mb-2" style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }}>“Alcanzar un equilibrio entre el trabajo y familia uno de los retos más importantes al ser empresaria”</h3>
                    <p className="text" style={{ fontSize: "17px", color: '#333333' }}>Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas y miedos</p>
                    <button id="button" className="bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-full py-2 px-4 mt-4">CONOCER MÁS</button>
                </div>
            </div>
            <div className="card relative bg-white overflow-hidden card3 md:col-span-3 lg:col-span-1">
                <div className="img-wrapper relative">
                    <img style={{ height: "20rem" }} className="w-full object-cover object-center rounded-2xl" src="https://agora2030.org/wp-content/uploads/2024/03/Agora-Partnership-y-Change-Lab-1536x1024.webp" alt="Imagen 3" />
                    <div className="text-overlay absolute top-3 left-3 bg-gray-700 bg-opacity-70 p-2 rounded">
                        <h4 className="text-sm font-semibold text-white">SALA DE PRENSA</h4>
                    </div>
                </div>
                <div className="text-wrapper p-4">
                    <h3 className="title mb-2" style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }}>Transformando a América Latina: Agora Partnerships adquiere CreativeLab</h3>
                    <p className="text" style={{ fontSize: "17px", color: '#333333' }}>Esta unión no solo representa una evolución en el nombre de la marca colombiana a ChangeLab, sino que también establece ambiciosas metas para el futuro.</p>
                    <button id="button" className="bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-full py-2 px-4 mt-4">CONOCER MÁS</button>
                </div>
            </div>
        </div>
      </div>

  )
}
