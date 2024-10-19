import  styles  from "../Botao/botao.module.css";


export default function Botao(props){
    return(
        <div className="flex gap-9 items-center flex-col transition-colors">
            <a 
            className={styles.Botao}
            href={props.pagina}
            rel="noopener noreferrer"
            >
            <p>{props.texto}</p>
            </a>
        </div>
    );
}

