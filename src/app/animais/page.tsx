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
            </div>
            
          ))
        ) : (""
         
        )}

        <div 
              style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: vaca 1</p>
              <p>Data de Nascimento: 09/11/2020</p>
              <p>Raça: mestiço</p>

              <div>
                <button><a href={`../animais/${1}/vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../animais/${1}/pesagens`}
                  rel="noopener noreferrer">
                  <p>---Ver Pesagens</p>
                  </a>
                </button>
              </div>
            </div>
            <div 
              style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Nome: vaca 2</p>
              <p>Data de Nascimento: 12/08/2019</p>
              <p>Raça: mestiço</p>

              <div>
                <button><a href={`../animais/${2}/vacinas`}
                  rel="noopener noreferrer">
                  <p>Ver Vacinas</p>
                  </a>
                </button>
                <button className="">
                  <a href={`../animais/${2}/pesagens`}
                  rel="noopener noreferrer">
                  <p>---Ver Pesagens</p>
                  </a>
                </button>
              </div>
            </div>
      
      <p>Carregando dados...</p>
      
      </main>
  );
}

