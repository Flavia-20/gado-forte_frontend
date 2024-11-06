'use client'; 

import { useEffect, useState } from 'react';
//import router, { useRouter } from 'next/router';
//import Botao from '../componentes/Botao/Botao';
import Header from '@/app/componentes/Header/page';
import Footer from '@/app/componentes/Footer/page';


interface Animal {
  id: number;
  nome: string;
  dataDeNascimento: string;
  raca: string;
}

export default function Animais() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  //const router = useRouter();

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => {
        setAnimais(data);
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []); // [] para garantir que o fetch aconteça apenas uma vez


  //const handleClick = (id: any) => {
  //  router.push(`/Animais/${id}/Vacinas`); // Redireciona para a página de vacinas com o ID do animal
  //};

  return (
    <main>
      <Header />
      <Footer />
      
         {animais.length > 0 ? (
          animais.map((animal: Animal, index) => (
            <div 
              key={index} 
              style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: {animal.nome}</p>
              <p>Data de Nascimento: {animal.dataDeNascimento}</p>
              <p>Raça: {animal.raca}</p>
               <div>
                <button><a href={`../Animais/${animal.id}/Vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../Animais/${animal.id}/Pesagens`}
                  rel="noopener noreferrer">
                  <p>---Ver Pesagens</p>
                  </a>
                </button>
              </div>
            </div>
          ))
        ) : (""
         
        )}

        <div 
              style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: vaca 1</p>
              <p>Data de Nascimento: 12/08/2019</p>
              <p>Raça: mestiço</p>

              <div>
                <button><a href={`../Animais/${1}/Vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../Animais/${1}/Pesagens`}
                  rel="noopener noreferrer">
                  <p>---Ver Pesagens</p>
                  </a>
                </button>
              </div>

              {/*<Botao href="../animais/${1}/Pesagens" texto="Ver pesagens"></Botao>
              <Botao href="../animais/${1}/pesagens" texto="Ver pesagens"></Botao>*/}
            </div>
      
      <p>Carregando dados...</p>
      
      </main>
  );
}

