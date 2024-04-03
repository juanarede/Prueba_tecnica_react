
export default function form() {
  return (
    <section className="bg-gray-900 py-10 md:py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">Suscríbete a nuestro newsletter</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <form action="/enviar-correo" method="post">
        <div className="mb-4">
          <label htmlFor="nombre" className="text-white block mb-2">Nombre</label>
          <input
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
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </form>
      <form action="/enviar-correo" method="post">
        <div className="mb-4">
          <label htmlFor="profesion" className="text-white block mb-2">Profesión</label>
          <input
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
            type="text"
            id="pais"
            name="pais"
            placeholder="Tu país"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </form>
      <div className="flex justify-center md:justify-end">
      <div className="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>

        <button type="submit" className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-md md:hidden">Enviar</button>
      </div>
    </div>
    <div className="flex justify-center hidden md:block">
    <div className="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>

      <button type="submit" className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-md">Enviar</button>
    </div>
  </div>
</section>

  )
}
