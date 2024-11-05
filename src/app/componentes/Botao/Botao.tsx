import  styles  from "../Botao/botao.module.css";

interface BotaoProps {
    texto: string; // Aqui
    pagina: string; // E aqui
  }

export default function Botao({ texto, pagina }: BotaoProps){
    return(
        <div className="flex gap-9 items-center flex-col transition-colors">
            <a 
            className={styles.Botao}
            href={pagina}
            rel="noopener noreferrer"
            >
            <p>{texto}</p>
            </a>
            
        </div>
    );
}

