import { useState } from 'react'
import Alert from './Alert'

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena1, setContrasena1] = useState('');
  const [contrasena2, setContrasena2] = useState('');
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    
    if (nombre === '' || email === '' || contrasena1 === '' || contrasena2 === '') {
        setError(true);
        return;

    } else if (contrasena1 != contrasena2) {
        setError2(true);
        return;
    }
    setError(false);
    setError2(false);
    setNombre('');
    setEmail('');
    setContrasena1('');
    setContrasena2('');
    Alert()
};


  return (
    <>
<form className="formulario" onSubmit={registrar}>

  <div className="form1">
     <input placeholder='Escriba su nombre' type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
  </div>

  <div className="form1">
     <input placeholder='Escriba su email' type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
  </div>

  <div className="form1">
     <input placeholder='Escriba su contraseña' type="password" name="pass1" className="form-control" onChange={(e) => setContrasena1(e.target.value)} value={contrasena1}/>
  </div>

  <div className="form1">
     <input placeholder='Confirme su contraseña' type="password" name="pass2" className="form-control" onChange={(e) => setContrasena2(e.target.value)} value={contrasena2}/>
  </div>

  <button type="submit" className="boton">Registrar</button>

  <div className='ultimocontenido'>
     {error ? <p>Completa todos los campos</p> : null}
     {error2 ? <p>La contraseña no coincide</p> : null}
  </div>   

</form>
    </>
  )
}
