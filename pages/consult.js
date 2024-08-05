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
        const agendamento = {
            nome: '',
            telefone: '',
            cpf: cpf,
            servico: '',
            profissional: '',
            data: '',
            horario: ''
        };

        router.push({
            pathname: '/consultInfo',
            query: agendamento
        });
    };

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


  