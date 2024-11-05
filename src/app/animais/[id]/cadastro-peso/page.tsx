'use client';

import Header from '@/app/Componentes/Header/page';
import Footer from '@/app/Componentes/Footer/page';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/app/componentes/Formulario/formulario.module.css";


export default function CadastrarPeso(){
        
        const [peso, setPeso] = useState('');
        const [dataPesagem, setDataPesagem] = useState(''); 
        const router = useRouter(); // Instância do router
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const url = '/api/cadastrarVacina'; 
      
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    peso,
                    dataPesagem
              }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              console.log('Sucesso:', data);
              router.push('/animais');
      
            } else {
                {/*colocar um alert aqui */}
                console.error('Erro:', data.message);
            }
          } catch (error) {
            console.error('Erro ao enviar os dados:', error);
          }
        };

        const handleCancel  = (e) => {
            e.preventDefault();
            router.push('/animais'); // Redireciona para a página inicial
        };
      
        return (
         <main>
              <Header/>
              <Footer/>              
              <form onSubmit={handleSubmit} className={styles.FormLogin}>
                <h1>Cadastro de peso</h1>
                <br />
                <div>
                    <label>Cadastro de peso: </label>
                    <input className={styles.InputForm}
                    type="text"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite o peso do animal"
                    />
                </div>
                <div>
                    <label>Data da pesagem:</label>
                    <input
                    className={styles.InputForm}
                    type="date"
                    value={dataPesagem} // Usando o estado correto
                    onChange={(e) => setDataPesagem(e.target.value)} // Atualiza o estado de data de nascimento
                    placeholder="Digite a data da pesagem"
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




