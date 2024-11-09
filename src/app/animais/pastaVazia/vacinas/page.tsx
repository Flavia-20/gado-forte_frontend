'use client';

import { useEffect, useState } from 'react';
import Header from '../../../componentes/Header/page';
import Footer from '../../../componentes/Footer/page';
import Botao from '../../../componentes/Botao/Botao';
import { useParams } from 'next/navigation';

interface Vacina {
  nome: string;
  dataAplicacao: string;
}

export default function Vacinas() {

  const { id } = useParams(); // Pega o ID do animal da URL
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [isClient, setIsClient] = useState(false); // Estado para verificar se estamos no lado do cliente

  useEffect(() => {
    setIsClient(true); // Definimos como true após o componente ser montado no cliente
  }, []);

  useEffect(() => {
    if (isClient && id) {
      // Fazendo a requisição para buscar as vacinas desse animal
      fetch(`https://api.exemplo.com/animais/${id}/vacinas`)
        .then((response) => response.json())
        .then((data) => {
          setVacinas(data); // Armazena os dados das vacinas
        })
        .catch((error) => console.error('Erro ao buscar vacinas:', error));
    }
  }, [id, isClient]); // Atualiza a requisição sempre que o ID mudar*/

  return (
    <div>
      <Header />
      <Footer />
      <main>
        <p>Vacinas do Animal {id}</p>
       
        {vacinas.length > 0 ? (
          vacinas.map((vacina, index) => (
              <div key={index}>
                <p>Nome: {vacina.nome}</p>
                <p>Data de Aplicação: {vacina.dataAplicacao}</p>
                
              </div>
          ))
        ) : (""
  
        )}
      </main>

      
      <div style={{ border: '1px solid gray', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
      >
        <p>Vacina: Contra febre</p>
        <p>Data de aplicação: 30/10/2024</p>
        <p>texto de restrições dessa vacina</p>
        
      </div>

      <div>
      <Botao texto="Cadastrar nova vacina" pagina={`../${id}/cadastrar-vacina`}/>
      </div>
      
    </div>
  );
}
