import Formulario from "../Componentes/Formulario/page";
//import imgLogoCadastro from '../favicon.ico';
import Botao from '../Componentes/Botao/Botao';

export default function login(){
    return(
        
        <main>
            
            <Formulario tipo = 'login'/>
            <Botao texto="Criar conta" pagina="../cadastro"/>
            
        </main>

    );
}