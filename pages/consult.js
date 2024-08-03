import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import Card from "../src/components/Card/Card";
import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Consult(){
    return (
    <div className={styles.background}>
        <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">     
            <form className={styles.form}>
                <Input type="text" placeholder="CPF (somente números)"  pattern="[0-9 ]+" title="Somente números"/>
                <div className={styles.buttonContainer}>                           
                      <Button type="button" className={styles.back} link="./#">Voltar</Button> 
                      <Button>Consultar</Button>
                </div>
            </form>
        </Card>
    </div>
    )
  }