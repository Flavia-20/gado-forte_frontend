'use client'; // Adiciona isso para indicar que o componente é um Client Component

import Image from "next/image";
import logoPreta from "@/app/icones/logoPreta.png";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import styles from '../Formulario/formulario.module.css';

interface FormularioProps {
  props: 'login' | 'cadastro';
}

export default function Formulario({ props }: FormularioProps)  {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter(); // Instância do router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Defina a URL dependendo se é login ou cadastro
    const url = props === 'login' ? '/api/login' : '/api/cadastro';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          senha
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sucesso:', data);

        // Redireciona após o login ou cadastro bem-sucedido
        if (props === 'login') {
          router.push('/animais'); // Redireciona para a página "home" após login
        } else {
          router.push('../cadastro'); // Redireciona para a página de sucesso de cadastro
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

      <Image
        src={logoPreta}
        width={130}
        height={90}    
        alt="logo"
      />

      <h1 className={styles.h1Form} >{props === 'login' ? 'Login' : 'Seu cadastro'}</h1>
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
        <label>Senha:</label>
        <input className={styles.InputForm}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <br/>
      <button type="submit">{props === 'login' ? 'Entrar' : 'Cadastrar'}</button>
    </form>
  );
}
