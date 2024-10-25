'use client'; 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../componentes/Header/page';
import Footer from '../componentes/Footer/page';

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
              //onClick={() => handleClick(animal.id)}
            >
              <p>Nome: {animal.nome}</p>
              <p>Sexo: {animal.sexo}</p>
              <p>Data de Nascimento: {animal['Data de nascimento']}</p>
              <p>Raça: {animal.raça}</p>
            </div>
          ))
        ) : (
         
        )}*/}

        <div 
              style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
              //onClick={() => handleClick(animal.id)}
            >
              <p>Nome: vaca 1</p>
              <p>Sexo: femea</p>
              <p>Data de Nascimento: 12/08/2019</p>
              <p>Raça: mestiço</p>
            </div>
      </main>
      <p>Carregando dados...</p>
      
    </div>
  );
}

