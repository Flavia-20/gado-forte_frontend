'use client';

//import { useRouter } from 'next/router';
//import { useEffect, useState } from 'react';
import Header from '@/app/componentes/Header/page';
import Footer from '@/app/componentes/Footer/page';
import Botao from '@/app/componentes/Botao/Botao';

export default function CadastroPeso() {
  /*const router = useRouter();
  const { id } = router.query; // Pega o ID do animal da URL
  const [peso, setPesos] = useState([]);

  useEffect(() => {
    if (id) {
      // Fazendo a requisição para buscar as pesagens desse animal
      fetch(`https://api.exemplo.com/animais/${id}/peso`)
        .then((response) => response.json())
        .then((data) => {
          setPesos(data); // Armazena os dados das pesagens
        })
        .catch((error) => console.error('Erro ao buscar pesagens:', error));
    }
  }, [id]); // Atualiza a requisição sempre que o ID mudar*/

  return (
    <div>
      <Header />
      <Footer />
      {/*<main>
        <h1>Pesagens do Animal {id}</h1>
        {pesos.length > 0 ? (
          pesos.map((peso, index) => (
            <div key={index}>
              <p>Peso do animal: {peso.peso}</p>
              <p>Data da pesagem: {peso.dataDaPesagem}</p>
            </div>
          ))
        ) : (
          <p>Carregando informações...</p>
        )}
      </main>*/}

      <p>aqui vai a lista das pesagens de determinado animal</p>
      <div 
              style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
            >
              <p>Peso do animal: 225</p>
              <p>Data da pesagem: 15/10/2024</p>
           
            </div>

      <div>
      <Botao texto="Cadastrar nova Pesagem" pagina={`../${id}/cadastro-peso`}/>
      </div>
      
    </div>
  );
}
