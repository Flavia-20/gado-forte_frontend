import style from "../Header/header.module.css";
import Image from 'next/image'; 
import logoBranca from '../../icones/logoBranca.png';

export default function Header(){
    return(

        <div className={style.divHeader}>

            <Image
                src={logoBranca}  // Use a imagem importada aqui
                width={75}
                height={40}    
                alt="logo"
            />

            {/*<p>tem uma imagem aqui</p>*/}
            <h1>GadoForte</h1>
        </div>
        
    );
}