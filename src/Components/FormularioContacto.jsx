import { useState } from "react";
import "./formulario.css";
import TarjetaContacto from "./TarjetaContacto";
const FormularioContacto = () => {
  const [contacto, setContacto] = useState([]);
  const [value, setValue] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    // name es el identificador escrito en el input
    const { name, value } = e.target;
    // Actualizamos el estado con el valor del input
    // "Prev" almacena el valor que ya se encuentra en el array y luego se actualiza con el nuevo valor
    setValue((prev) => ({
      ...prev,
      [name]: value,
      // [identificador]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setContacto([...contacto, value]);
  }

  return (
    <div className="form-container">
      <h2>Formulario De Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          required
          minLength={4}
          value={value.nombre}
          onChange={handleChange}
          placeholder={"Escribe Tu nomre"}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={value.email}
          onChange={handleChange}
          minLength={6}
          placeholder={"Escribe Tu Email"}
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          type="tel"
          name="telefono"
          required
          value={value.telefono}
          onChange={handleChange}
          minLength={9}
          placeholder={"Escribe Tu Telefono"}
        />
        <button type="submit"> Guardar </button>
      </form>
      <div>
        {
          // Si el array de tarjetas es > 0 carga el Titulo
          // esto seria un if de linea representado por el operador "?"
          contacto.length > 0 ? <h2> Tarjetas De Contactos</h2> : null
        }
        {contacto.map(
          // Usamos la funcion map en vez de forEach para mostrar las tarjetas de contacto cuando se carguen
          // (Conjunto de objetos , Indice o contador)
          
          (item, index) => (
            <TarjetaContacto
            // La key es el indice del array usado para contar los elementos de dentro de contacto
              key={index}
              // Se envian los porps segun el nombre
              nombre={item.nombre}
              email={item.email}
              telefono={item.telefono}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FormularioContacto;
