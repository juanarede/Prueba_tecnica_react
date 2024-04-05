/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { message } from '../../../fetch/message';

export default function form() {
 const [ nombre, setNombre ] = useState('');
 const [ apellido, setApellido ] = useState('');
 const [ email, setEmail ] = useState('');
 const [ profesion, setProfesion ] = useState('');
 const [ empresa, setEmpresa ] = useState('');
 const [ pais, setPais ] = useState('');
 const [ result, setResult ] = useState('');

 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const payload = {
        nombre: nombre,
        apellido:apellido,
        email: email,
        profesion: profesion,
        empresa: empresa,
        pais:pais
      }
   const data = await message(payload);
   setResult(data)
 }






  return (
    <section className="bg-gray-900 py-10 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">Suscríbete a nuestro newsletter</h2>
      <div className="max-w-xl mx-auto"> {/* Establece el ancho máximo del contenedor del formulario y lo centra */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4"> {/* Utiliza grid para apilar los elementos del formulario */}
          <div className="mb-4">
            <label htmlFor="nombre" className="text-white block mb-2">Nombre</label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="text-white block mb-2">Apellido</label>
            <input
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Tu apellido"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2">Correo Electrónico</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profesion" className="text-white block mb-2">Profesión</label>
            <input
              onChange={(e) => setProfesion(e.target.value)}
              value={profesion}
              type="text"
              id="profesion"
              name="profesion"
              placeholder="Tu profesión"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="empresa" className="text-white block mb-2">Empresa</label>
            <input
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
              type="text"
              id="empresa"
              name="empresa"
              placeholder="Tu empresa"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pais" className="text-white block mb-2">País</label>
            <input
              onChange={(e) => setPais(e.target.value)}
              value={pais}
              type="text"
              id="pais"
              name="pais"
              placeholder="Tu país"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center"> {/* Centra el botón de envío */}
            <div className="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>
            <button type="submit" className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-md">Enviar</button>
          </div>
           {result.length !== 0 && <p className='text-white'>{result}</p>}
        </form>
      </div>
    </div>
  </section>
  

  )
}
