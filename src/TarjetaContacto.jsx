import React from 'react';

const TarjetaContacto = ({ nombre, email, telefono }) => {
  const estilosTarjeta = {
    border: '1px solid #ccc',
    borderRadius: '12px',
    width: '100%',
    padding: '2em 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px auto',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left',
  };

  const titulo = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
    padding: '0 1em',
  };

  const info = {
    fontSize: '16px',
    marginBottom: '4px',
    color: '#555',
    padding: '0 1em',
  };

  return (
    <div style={estilosTarjeta}>
      <div style={titulo}>{nombre}</div>
      <div style={info}>📧 {email}</div>
      <div style={info}>📞 {telefono}</div>
    </div>
  );
};

export default TarjetaContacto;