import React from 'react';
import emailjs from 'emailjs-com';
import "./styles/contact.css";
import contactImage from '../assets/contact.png';

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'SAdTFTY3wbPGv4SB8')
    .then((result) => alert('Mensaje enviado!'))
    .catch((error) => console.log(error));
};

export const Contact = () => (
  <div
    className="h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${contactImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <section
      id="contact"
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ml-4 mr-4"
      style={{ maxWidth: '500px' }}
    >
      <h2 className="text-3xl text-blue-600 font-bold text-center mb-10">Contacto</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="hidden"
          name="to_email"
          value="jorgemf195@gmail.com"
        />
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button type="submit" className="btn-hover-effect w-full p-3">
          <span>Enviar</span>
        </button>
      </form>
    </section>

    <div className="content-buzo">
      <img src='/buzo.png' height={20} />
    </div>
  </div>
);

