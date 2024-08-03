import styles from '../styles/consultInfo.module.css'
import Card from "../src/components/Card/Card";
import Link from "next/link";
import { useRouter } from 'next/router';
import Button from '../src/components/button/button';


export default function Index(){
    const router = useRouter();
    const { nome, telefone, cpf, servico, profissional, data, hora } = router.query;
    return (
      <div className={styles.background}>
        <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">     
          <div className={styles.form}>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Serviço:</strong> {servico}</p>
            <p><strong>Profissional:</strong> {profissional}</p>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Horário:</strong> {hora}</p>
           </div>
          <Button link="./#">Voltar</Button>
        </Card>
      </div>
    )
  }