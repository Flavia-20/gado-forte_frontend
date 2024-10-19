import Formulario from "../componentes/Formulario/page";
//import imgLogoCadastro from '../favicon.ico';
import Botao from '../componentes/Botao/Botao';

export default function login(){
    return(
        
        <body>
            
            <main>
                <Formulario titulo = 'Login'/>
                <div >
                <Botao texto="Entrar" pagina="../animais"/>
                <Botao texto="Criar conta" pagina="../cadastro"/>
                </div>
            </main>
     
        </body>
        
    );
    //Acho que aqui eu crio a lógica do POST para enviar os dados co login pro back
}