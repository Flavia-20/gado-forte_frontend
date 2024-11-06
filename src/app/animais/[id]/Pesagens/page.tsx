'use client';

//import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/app/componentes/Header/page';
import Footer from '@/app/componentes/Footer/page';
import Botao from '@/app/componentes/Botao/Botao';
import { useParams } from 'next/navigation';

interface Peso{
  peso: number;
  dataDaPesagem: string;
}

export default function Pesagens() {
  const { id } = useParams(); // Pega o ID do animal da URL
  const [pesos, setPesos] = useState<Peso[]>([]);

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
  }, [id]); // Atualiza a requisição sempre que o ID mudar

  return (
    <div>
      <Header />
      <Footer />

    
      <main>
        <p>Pesagens do Animal {id}</p>

        <div style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
        >
          <p>Peso do animal: 225</p>
          <p>Data da pesagem: 15/10/2024</p>
        
      </div>

        {pesos.length > 0 ? (
          pesos.map((peso, index) => (
            <div key={index} style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}>
              <p>Peso do animal: {peso.peso}</p>
              <p>Data da pesagem: {peso.dataDaPesagem}</p>
            </div>
          ))
        ) : (
          <p>Carregando informações...</p>
        )}
      </main>

      

      <div>
      <Botao texto="Cadastrar nova Pesagem" pagina={`../${id}/Cadastro-peso`}
      />
      </div>
      
    </div>
  );
}
