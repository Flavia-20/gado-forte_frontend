import Header from "../Componentes/Header/page";
import Footer from "../Componentes/Footer/page";
import styles from "../calendario/calendario.module.css";


export default function Calendario() {
  return (
    <div>
      <Header />
      <Footer />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
                <th>Vacinas</th>
                <th>Jan</th>
                <th>Fev</th>
                <th>Mar</th>
                <th>Abr</th>
                <th>Mai</th>
                <th>Jun</th>       
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vacina contra brucelose</td>
              <td></td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Vacina contra paratifo nos bezerros</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
                <th>Vacinas</th>
                <th>Jul</th>
                <th>Ago</th>
                <th>Set</th>
                <th>Out</th>
                <th>Nov</th>
                <th>Dez</th>   
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Vacina contra paratifo nas vacas prenhas</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Vacina contra paratifo nos bezerros</td>
              <td></td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
