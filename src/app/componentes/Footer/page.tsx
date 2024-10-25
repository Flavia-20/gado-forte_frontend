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
            <svg 
            width="40px" 
            height="40px" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" 
              stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" 
                fill="#000000"></path> 
              </g>
            </svg>
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="../CadsAnimal"
            rel="noopener noreferrer"
          >
          <svg fill="#000000" 
          width="40px" 
          height="40px" 
          viewBox="0 0 32.00 32.00" 
          xmlns="http://www.w3.org/2000/svg" 
          transform="rotate(0)" 
          stroke="#000000" 
          stroke-width="0.00032">
            <g id="SVGRepo_bgCarrier" 
            stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke="#CCCCCC" 
            stroke-width="0.064"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.858-6.5c1.288 0 1.653-1.194 1.653-2.106s-.065-1.325-.065-1.737c0-.65.328-2.273.923-2.953 1.159-1.325 1.889-2.512 1.889-4.234 1.008-.521 2.79-.999 3.476-1.78S26 10.8 26 9.214c0-.405-.086-.977-.258-1.715-.395 1.234-1.003 2.08-1.824 2.54-1.201.674-2.555 1.173-3.712 1.173h-8.412c-1.157 0-2.51-.5-3.712-1.173-.82-.46-1.429-1.306-1.824-2.54C6.086 8.238 6 8.81 6 9.215c0 1.585.58 2.693 1.266 3.474s2.468 1.26 3.476 1.78c0 1.723.73 2.91 1.889 4.235.595.68.923 2.303.923 2.953 0 .412-.065.825-.065 1.737s.365 2.106 1.653 2.106z"></path>
            </g>
          </svg>
          </a>
           {/*<a
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
          </a>*/}
        </footer>
        </div>
        


    );
}