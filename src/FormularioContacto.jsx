import {useState} from "react"
import "./formulario.css"
import TarjetaContacto from "./TarjetaContacto"
const FormularioContacto = () => {
    const [contacto, setContacto] = useState([])
    const [value, setValue] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });


    const handleChange = (e) => {
        const {name , value } = e.target;
        setValue(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setContacto([...contacto, value]);
    }
      
    return ( 
        <div className="form-container" >
            <h2>Formulario De Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" value={value.nombre} onChange={handleChange} placeholder={"Escribe Tu nomre"}  />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={value.email} onChange={handleChange} placeholder={"Escribe Tu Email"}   />
                <label htmlFor="telefono">Telefono</label>
                <input type="text" name="telefono" value={value.telefono} onChange={handleChange} placeholder={"Escribe Tu Telefono"}   />
                <button type="submit"> Guardar </button>
            </form>
            <div>
                { contacto.length > 0 ? <h2> Tarjetas De Contactos</h2> : null}

                {contacto.map((item, index) => (
                <TarjetaContacto key={index} nombre={item.nombre} email={item.email} telefono={item.telefono} />
                ))}
            </div>
            
        </div>
     );
}
 
export default FormularioContacto;