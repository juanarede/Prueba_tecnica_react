import React from 'react'

export default function NavbarBlog() {
  return (
    <div style={{marginTop:"5rem"}} className="flex justify-center md:justify-center md:ml-6 py-4 ">
    <nav className="flex flex-wrap md:flex-nowrap bg-gray-600 rounded-lg px-2 md:px-10 justify-center md:justify-start w-full md:w-auto">
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Blog</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Convocatoria abierta</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Oportunidad Laboral</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Programa</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Programa en ejecución</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Programas ejecutados</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Sala de Prensa</a>
        <a href="#" className="px-2 py-2 mx-1 text-white hover:text-gray-900 transition duration-300">Todos</a>
    </nav>
</div>




  )
}
