import style from "../Footer/Footer.module.css";

import Image from "next/image";


export default function Footer(){
    return (
        <div>

          <footer className={style.footer}>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="../animais"
            rel="noopener noreferrer"
          >
            Inicio
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="../CadsAnimal"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            +Animal
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Perfil
          </a>
        </footer>
        </div>
        


    );
}