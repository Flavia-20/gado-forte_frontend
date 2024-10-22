'use client'; // Adiciona isso para indicar que o componente é um Client Component
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import styles from '../Formulario/formulario.module.css';

export default function Formulario({ tipo }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter(); // Instância do router

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Defina a URL dependendo se é login ou cadastro
    const url = tipo === 'login' ? '/api/login' : '/api/cadastro';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sucesso:', data);

        // Redireciona após o login ou cadastro bem-sucedido
        if (tipo === 'login') {
          router.push('../animais'); // Redireciona para a página "home" após login
        } else {
          router.push('/cadastro-completo'); // Redireciona para a página de sucesso de cadastro
        }
      } else {
        console.error('Erro:', data.message);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.FormLogin}>
      <div>
        <label>Nome:</label>
        <input className={styles.InputForm}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <label>Email:</label>
        <input className={styles.InputForm}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </div>
      <button type="submit">{tipo === 'login' ? 'Entrar' : 'Cadastrar'}</button>
    </form>
  );
}
