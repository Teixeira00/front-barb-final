import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import Card from "../src/components/Card/Card";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Consult(){
    const [cpf, setCpf] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setCpf(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // lógica para buscar os dados do CPF
        // Para este exemplo, vamos simular que encontramos um agendamento
        const agendamento = {
            nome: 'João Silva',
            telefone: '123456789',
            cpf: cpf,
            servico: 'Corte de Cabelo',
            profissional: 'Profissional 1',
            data: '2024-08-10',
            horario: '14:00'
        };

        router.push({
            pathname: '/consultInfo',
            query: agendamento
        });
    };

    // return (
    // <div className={styles.background}>
    //     <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">     
    //         <form className={styles.form}>
    //             <Input type="text" placeholder="CPF (somente números)"  pattern="[0-9 ]+" title="Somente números"/>
    //             <div className={styles.buttonContainer}>                           
    //                   <Button type="button" className={styles.back} link="./#">Voltar</Button> 
    //                   <Button>Consultar</Button>
    //             </div>
    //         </form>
    //     </Card>
    // </div>
    // )

    return (
        <div className={styles.background}>
            <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="CPF (somente números)"
                        pattern="[0-9]+"
                        title="Somente números"
                        value={cpf}
                        onChange={handleChange}
                    />
                    <div className={styles.buttonContainer}>
                        <Button type="button" className={styles.back} link="/">Voltar</Button>
                        <Button type="submit">Consultar</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
  }