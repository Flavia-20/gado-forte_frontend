'use client'; // Adiciona isso para indicar que o componente é um Client Component

import Header from '@/app/componentes/Header/page';
import Footer from '@/app/componentes/Footer/page';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import styles from "@/app/componentes/Formulario/formulario.module.css";


export default function CadastraVacina(){
        
        const [nome, setNome] = useState('');
        const [aplicador, setAplicador] = useState('');
        const [dataAplicacao, setDataAplicacao] = useState(''); // Novo estado para data de nascimento
        const router = useRouter(); // Instância do router
      
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
      
          const url = '/api/cadastrarVacina'; 
      
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  nome,
                  aplicador,
                  dataAplicacao
              }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              console.log('Sucesso:', data);
              router.push('/Animais');
      
            } else {
                {/*colocar um alert aqui */}
                console.error('Erro:', data.message);
            }
          } catch (error) {
            console.error('Erro ao enviar os dados:', error);
          }
        };

        const handleCancel  = (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            router.push('/Animais'); // Redireciona para a página inicial
        };
      
        return (
         <main>
              <Header/>
              <Footer/>              
              <form onSubmit={handleSubmit} className={styles.FormLogin}>
                <h1>Cadastro da vacina </h1>
                <br />
                <div>
                    <label>Nome da vacina:</label>
                    <input className={styles.InputForm}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome da vacina aqui"
                    />
                </div>
                <div>
                    <label>Nome de quem aplicou:</label>
                    <input className={styles.InputForm}
                    type="text"
                    value={aplicador}
                    onChange={(e) => setAplicador(e.target.value)}
                    placeholder="Quem aplicou a vacina?"
                    />
                </div>
                <div>
                    <label>Data da aplicacao:</label>
                    <input
                    className={styles.InputForm}
                    type="date"
                    value={dataAplicacao} // Usando o estado correto
                    onChange={(e) => setDataAplicacao(e.target.value)} // Atualiza o estado de data de nascimento
                    placeholder="Digite a data da aplicação"
                    />
                </div>
                <br/>
                <button type="submit">Cadastar</button>
                <br/>
                <button onClick={handleCancel}>Cancelar</button>
              </form>
         </main>
        );

}




