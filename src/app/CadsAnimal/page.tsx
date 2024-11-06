'use client'; // Adiciona isso para indicar que o componente é um Client Component

import Header from '../componentes/Header/page';
import Footer from '../componentes/Footer/page';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import styles from '../componentes/Formulario/formulario.module.css';

export default function Formulario({ }) {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [dataNascimento, setDataNascimento] = useState(''); // Novo estado para data de nascimento
  const router = useRouter(); // Instância do router

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Defina a URL dependendo se é login ou cadastro
    const url = '/api/CadsAnimal'; 

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome,
            raca,
            dataNascimento
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sucesso:', data);
        window.alert("Cadastro feito!")
        router.push('../Animais');

      } else {
        console.error('Erro:', data.message);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const handleCancel  = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push('/Animais'); 
  };

  return (
   <main>
        <Header/>
        <Footer/>
        
        <form onSubmit={handleSubmit} className={styles.FormLogin}>
          <h1>Cadastro de Animais</h1>
          <br></br>
          <div>
              <label>Nome do animal:</label>
              <input className={styles.InputForm}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              />
          </div>
          <div>
              <label>Raça:</label>
              <input className={styles.InputForm}
              type="text"
              value={raca}
              onChange={(e) => setRaca(e.target.value)}
              placeholder="Digite a raça do animal"
              />
          </div>
          {/*<div>
              <label>Sexo do Animal:</label>
              <input className={styles.InputForm}
              type="text"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              placeholder="Digite a raça do animal"
              />
          </div>*/}
          <div>
              <label>Data de Nascimento:</label>
              <input
              className={styles.InputForm}
              type="date"
              value={dataNascimento} // Usando o estado correto
              onChange={(e) => setDataNascimento(e.target.value)} // Atualiza o estado de data de nascimento
              placeholder="Digite a data de nascimento"
              />
          </div>
          <br></br>
          <button type="submit">Cadastar</button>
          <br/>
          <button onClick={handleCancel}>Cancelar</button>
        </form>
   </main>
  );
}
