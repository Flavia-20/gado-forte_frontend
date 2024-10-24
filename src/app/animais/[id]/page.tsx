'use client';

//import { useRouter } from 'next/router';
//import { useEffect, useState } from 'react';
import Header from '../../componentes/Header/page';
import Footer from '../../componentes/Footer/page';
import Botao from '../../componentes/Botao/Botao';

export default function Vacinas() {
  /*const router = useRouter();
  const { id } = router.query; // Pega o ID do animal da URL
  const [vacinas, setVacinas] = useState([]);

  useEffect(() => {
    if (id) {
      // Fazendo a requisição para buscar as vacinas desse animal
      fetch(`https://api.exemplo.com/animais/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setVacinas(data); // Armazena os dados das vacinas
        })
        .catch((error) => console.error('Erro ao buscar vacinas:', error));
    }
  }, [id]); // Atualiza a requisição sempre que o ID mudar*/

  return (
    <div>
      <Header />
      <Footer />
      {/*<main>
        <h1>Vacinas do Animal {id}</h1>
        {vacinas.length > 0 ? (
          vacinas.map((vacina, index) => (
            <div key={index}>
              <p>Nome: {vacina.nome}</p>
              <p>Data de Aplicação: {vacina.dataAplicacao}</p>
            </div>
          ))
        ) : (
          <p>Carregando vacinas...</p>
        )}
      </main>*/}

      <p>aqui vai a lista das vacinas de determinado animal</p>

      <div>{/*estilizar o botão */}
      <Botao texto="Cadastrar nova vacina" pagina={`../animais/1/cadastrar-vacina`}/>
      </div>
      
    </div>
  );
}
