'use client'; 

import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import Botao from '../componentes/Botao/Botao';
import Header from '@/app/componentes/Header/page';
import Footer from '@/app/componentes/Footer/page';

export default function Animais() {
  //const [animais, setAnimais] = useState([]);
 //const router = useRouter();

  {/*useEffect(() => {

    fetch('')
      .then((response) => response.json())
      .then((data) => {
        setAnimais(data);
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []); // [] para garantir que o fetch aconteça apenas uma vez
*/}

  //const handleClick = (id) => {
   // router.push(`/animais/${id}/vacinas`); // Redireciona para a página de vacinas com o ID do animal
  //};

  return (
    <div>
      <Header />
      <Footer />
      <main>
         {/*{animais.length > 0 ? (
          animais.map((animal, index) => (
            <div 
              key={index} 
              style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: {animal.nome}</p>
              <p>Data de Nascimento: {animal['Data de nascimento']}</p>
              <p>Raça: {animal.raça}</p>
               <div>
                <button><a href={`../animais/${id}/vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../animais/${id}/Pesagens`}
                  rel="noopener noreferrer">
                  <p>Ver Pesagens</p>
                  </a>
                </button>
              </div>
            </div>
          ))
        ) : (
         
        )}*/}

        <div 
              style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: vaca 1</p>
              <p>Data de Nascimento: 12/08/2019</p>
              <p>Raça: mestiço</p>

              <div>
                <button><a href={`../animais/${1}/vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../animais/${1}/Pesagens`}
                  rel="noopener noreferrer">
                  <p>Ver Pesagens</p>
                  </a>
                </button>
              </div>

              {/*<Botao href="../animais/${1}/pesagens" texto="Ver pesagens"></Botao>
              <Botao href="../animais/${1}/pesagens" texto="Ver pesagens"></Botao>*/}
            </div>
      </main>
      <p>Carregando dados...</p>
      
    </div>
  );
}

