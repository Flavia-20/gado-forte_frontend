import Formulario from "../componentes/Formulario/page";
//import imgLogoCadastro from '../favicon.ico';

import Botao from "../componentes/Botao/Botao";

 //Acho que aqui eu crio a lógica do POST para enviar os dados co login pro back

export default function Cadastro(){
    return(
        
        <body>
           
            <main>
                <Formulario titulo = 'Primeiro Cadastro'/>
                <Botao texto="Cadastrar" pagina="../animais"/>
            </main>
     
        </body>
        
    );
   
}