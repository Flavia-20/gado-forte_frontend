'use client';

//import { useRouter } from 'next/router';
//import { useEffect, useState } from 'react';
import Header from '../../../Componentes/Header/page';
import Footer from '../../../Componentes/Footer/page';
import Botao from '../../../Componentes/Botao/Botao';

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
              <p>Restições: texto de restrições<p>
            </div>
          ))
        ) : (
          <p>Carregando vacinas...</p>
        )}
      </main>*/}

      <p>aqui vai a lista das vacinas de determinado animal</p>
      <div style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Vacina: Contra febre</p>
              <p>Data de aplicação: 30/10/2024</p>
              <p>texto de restrições dessa vacina</p>
              
            </div>

      <div>{/*estilizar o botão */}
      <Botao texto="Cadastrar nova vacina" pagina={`../1/cadastrar-vacina`}/>
      </div>
      
    </div>
  );
}
