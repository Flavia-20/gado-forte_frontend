import Formulario from "../componentes/Formulario/page";
//import imgLogoCadastro from '../favicon.ico';
import Botao from '../componentes/Botao/Botao';

export default function login(){
    return(
        
        <main>
            
            <Formulario tipo = 'login'/>
            <Botao texto="Criar conta" pagina="../cadastro"/>
            
        </main>

    );
}