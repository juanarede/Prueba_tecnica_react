import React from 'react'

export default function Allies() {
  return (
    <div style={{ marginTop: "8rem", marginBottom:'5rem' }} className="flex items-center justify-center mb-5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-start justify-between mb-6">
        <div className="mb-4 sm:mb-0 text-wrap lg:w-1/2">
          <h2 className="text-2xl lg:text-xl font-semibold  pb-7" style={{ fontSize: '32px', color: "#19417F" }}>Nuestros aliados</h2>
          <p className="text-gray-700 text-sm" style={{ fontSize: '20px' }}>
  Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente. <br />
  <span className='block mt-4'>Contáctate para conocer más sobre cómo colaborar con Agora Partnerships.</span>
</p>

        </div>
        <div className="flex items-center">
          <p style={{ color: "#19417F" }} className="font-bold mr-2 cursor-pointer hover-animation">Súmate como aliado</p>
          <img src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle.svg" alt="Flecha" className="move-up-right" />
        </div>
      </div>
      </div>
      </div>
  )
}
