import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(""); 
  const [recaptchaValue, setRecaptchaValue] = useState(""); 
  const form = useRef<HTMLFormElement>(null); 

  const sendEmail = (e: FormEvent) => { 
    e.preventDefault();

    if (!recaptchaValue) {
      setRecaptchaError("Por favor, marca el Recaptcha.");
      return;
    }

  
    setRecaptchaError("");

    if (form.current) {
      emailjs
        .sendForm('service_3vk24h8', 'template_w9mlru6', form.current, {
          publicKey: 'XgNJXn4JShUb-9F0c',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setShowModal(true); 
            form.current!.reset(); 
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setRecaptchaValue(value);
    }
  };

  return (
    <>
      <section className="bg-gray-900 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">Suscríbete a nuestro newsletter</h2>
          <div className="max-w-xl mx-auto">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-4">
              <div className="mb-4">
                <label htmlFor="nombre" className="text-white block mb-2">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  required 
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
                  required 
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
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="profesion" className="text-white block mb-2">Profesión</label>
                <input
                  type="text"
                  id="profesion"
                  name="profesion"
                  placeholder="Tu profesión"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  required 
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
                  required 
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
                  required 
                />
              </div>
              <div className="mb-4">
                <ReCAPTCHA
                  sitekey="6Ldq27IpAAAAACneCvDuUA_fzUcHfVMJEb12gjI5"
                  onChange={handleRecaptchaChange}
                  className="g-recaptcha"
                />
                {recaptchaError && <p className="text-red-500">{recaptchaError}</p>}
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-md mt-4">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-center text-xl font-semibold mb-4">Mensaje enviado exitosamente</p>
            <button onClick={closeModal} className="bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded-md">Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
