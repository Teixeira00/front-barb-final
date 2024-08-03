import Button from "../src/components/button/button";
import Card from "../src/components/Card/Card";
import styles from "../styles/index.module.css";
import Link from "next/link";



export default function Index(){
  return (
    <div className={styles.background}>
      <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Agendamento">     
        <div className={styles.form}>
          <Button link="./register">Agendar</Button>                    
          <Button link="./consult">Visualizar</Button>
        </div>
      </Card>
    </div>
  )
}