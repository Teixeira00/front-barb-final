import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Card from '../src/components/Card/Card'
import Dropdown from '../src/components/dropdown/dropdown'
import Link from 'next/link'
import TimeSelector from '../src/components/timeSelector/timeSelector'
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Register() {

  const router = useRouter(); // Inicializando o useRouter
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        cpf: '',
        servico: '',
        profissional: '',
        data: '',
        hora: '',
    });

    const optionsService = ['Serviço 1', 'Serviço 2', 'Serviço 3'];
    const optionsProf = ['Profissional 1', 'Profissional 2', 'Profissional 3'];
    const availableTimes = ['13:00', '14:00', '15:00'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        
        // Verificar se todos os campos obrigatórios estão preenchidos
        const { nome, telefone, cpf, servico, profissional, data, hora } = formData;
        if (nome && telefone && cpf && servico && profissional && data && hora) {
            // Redirecionar para a página de informações, passando os dados como query parameters
            router.push({
                pathname: '/consultInfo',
                query: formData, // Passando os dados como query parameters
            });
        } else {
            alert("Por favor, preencha todos os campos obrigatórios."); // Mensagem de erro caso falte algum dado
        }
    };

  return (
    <div className={styles.background}>
            <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Agendamento">
                <form className={styles.form}>
                    <Input type="text" placeholder="Nome Completo" pattern="[A-Za-z ]+"  title="Somente caracteres"/>
                    <Input type="text" placeholder="Telefone"  pattern="[0-9 ]+" title="Somente números"/>
                    <Input type="text" placeholder="CPF"  pattern="[0-9 ]+" title="Somente números"/>
                    <Dropdown options={optionsService} placeholder="Serviço" />
                    <Dropdown options={optionsProf} placeholder="Profissional" />
                    <Input type="date" placeholder="Data"/>
                    <TimeSelector availableTimes={availableTimes}  />
                    <div className={styles.buttonContainer}>                           
                      <Button type="button" className={styles.back} link="./#">Voltar</Button> 
                      <Button>Marcar</Button>
                    </div>

                </form>
            </Card>
        </div>
  )
}

