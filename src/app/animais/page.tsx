import { useEffect, useState } from 'react';
import Header from '../componentes/Header/page';
import Footer from '../componentes/Footer/page';

export default function Animais() {
    /*const [animais, setAnimais] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para uma API externa
        fetch('https://api.exemplo.com/animais')
            .then((response) => response.json())
            .then((data) => {
                setAnimais(data); // Armazena os dados no estado
            })
            .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []); // [] para garantir que o fetch aconteça apenas uma vez*/

    return (
        <div>
            <Header />
            <Footer />
            <main>
                {/*{animais.length > 0 ? (
                    animais.map((animal, index) => (
                        <div key={index}>
                            <p>Nome: {animal.nome}</p>
                            <p>Sexo: {animal.sexo}</p>
                            <p>Data de Nascimento: {animal['Data de nascimento']}</p>
                            <p>Raça: {animal.raça}</p>
                        </div>
                    ))
                ) : (
                    <p>Carregando dados...</p>
                )}*/}
            </main>
            
        </div>
    );
}
