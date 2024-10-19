import styles from '../Formulario/formulario.module.css';


export default function Formulario(props) {
    return (
        <form className={styles.FormLogin}>

                <h1 className={styles.h1Form}>{props.titulo}</h1>

                <label>Digite seu nome aqui:</label>
                <input
                    className={styles.InputForm}
                    placeholder="Nome"
                    type="text"
                />
                <br></br>

                <label>Digite seu email aqui:</label>
                <input
                    className={styles.InputForm}
                    placeholder="Email"
                    type="email"
                />   
        </form>
    );
}
