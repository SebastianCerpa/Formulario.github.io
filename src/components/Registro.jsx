import Formulario from './Formulario';
import SocialButton from './SocialButton';

export default function Registro() {
  return (
    <>
    <h1>Crea una cuenta</h1>
            <div className='containerIcons my-3'>
                <SocialButton icon="fa-brands fa-facebook" />
                <SocialButton icon="fa-brands fa-github" />
                <SocialButton icon="fa-brands fa-linkedin-in" />
            </div>
            <p>O usa tu email para registrarte</p>
            <Formulario/>
            {}
    </>
  )
}
