import React from 'react'

export default function CardsBlog() {
  return (
    <div className="flex items-center justify-center mb-5">
    <div className="max-w-7xl mx-auto px-4">
    <div style={{ marginTop: "3rem" }}>
    
    <div className="grid grid-cols-1 md:grid-cols-6  gap-4">
    <div style={{backgroundColor:"#19417F"}} className="card relative card1 md:col-span-2 lg:col-span-4 rounded-2xl">
  <div style={{padding:"5vw"}}>
    <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white text-start mb-3'>NUESTRO BLOG</h2>
    <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white text-start mb-8'>Conoce nuestros últimos artículos y noticias</h3>
  </div> 
</div>

      <div className="card relative bg-white overflow-hidden card3 md:col-span-2 lg:col-span-2">
          <div className="img-wrapper relative">
              <img style={{ height: "23rem" }} className="w-full object-cover object-center rounded-2xl" src="https://agora2030.org/wp-content/uploads/2022/10/Frame-348.png" alt="Imagen" />
          </div>     
      </div>
  </div>
</div>
</div>
</div>
  )
}
