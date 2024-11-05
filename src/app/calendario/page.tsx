import Header from "../componentes/Header/page";
import Footer from "../componentes/Footer/page";
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
            <td>Vacina contra a raiva</td>
            <td>x</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <tr>
            </tr>
            <td>Vacina contra febre aftosa no Planalto de MS</td>
            <td></td>
            <td>x</td>
            <td></td>
            <td></td>
            <td>x</td>
            <td></td>
            <tr>
            </tr>
            <td>Vacina contra febre  aftosa no Pantanal de MS</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
            <td></td>
            <tr>
            </tr>
              <td>Vacina contra botulismo</td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Vacina contra carbunculo sintomatico</td>
              <td></td>
              <td></td>
              <td>x</td>
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
          <td>Vacina contra febre aftosa no Planalto de MS</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
            <td></td>
            <tr>
            </tr>
            <td>Vacina contra febre aftosa no Pantanal de MS</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
            <td></td>
            <tr>
            </tr>
            <td>Vacina contra carbunculo sintomatico</td>
            <td></td>
            <td>x</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <tr>
            </tr>
            <td>Vacina contra paratifo nas vacas prenhas</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>Campilobacteriose</td>
              <td></td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>Leptospirose</td>
              <td></td>
              <td>x</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>Rinotraqueíte infecciosa bovina</td>
              <td></td>
              <td></td>
              <td></td>
              <td>x</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>Diarreia viral bovina</td>
              <td></td>
              <td></td>
              <td></td>
              <td>x</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>Diarreia por rotavirus e coronavirus</td>
              <td></td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
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
