import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Card from '../src/components/Card/Card';
import Dropdown from '../src/components/dropdown/dropdown';
import Link from 'next/link';
import TimeSelector from '../src/components/timeSelector/timeSelector';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    const optionsService = ['Serviço 1', 'Serviço 2', 'Serviço 3'];
    const optionsProf = ['Profissional 1', 'Profissional 2', 'Profissional 3'];
    const availableTimes = ['13:00', '14:00', '15:00'];

    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        cpf: '',
        servico: '',
        profissional: '',
        data: '',
        horario: '',
    });

    const [error, setError] = useState('');

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos foram preenchidos
        const isFormComplete = Object.values(form).every((value) => value.trim() !== '');
        
        // Verifica se o CPF tem exatamente 11 dígitos
        const isCpfValid = form.cpf.length === 11;

        if (!isFormComplete) {
            setError('Necessário preencher todos os dados');
        } else if (!isCpfValid) {
            setError('O CPF deve ter exatamente 11 dígitos');
        } else {
            setError(''); // Limpa a mensagem de erro, se todos os campos estiverem preenchidos e o CPF for válido
            localStorage.setItem(`agendamento_${form.cpf}`, JSON.stringify(form));
            router.push('/consultInfo?cpf=' + form.cpf);
        }
    };

    return (
        <div className={styles.background}>
            <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Agendamento">
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input                                          //NOME
                        type="text" 
                        name="nome" 
                        placeholder="Nome Completo" 
                        pattern="[A-Za-z ]+" 
                        title="Somente caracteres" 
                        value={form.nome} 
                        onChange={handleChange} 
                    />
                    <Input                                          //TELEFONE 
                        type="text" 
                        name="telefone" 
                        placeholder="Telefone" 
                        pattern="[0-9 ]+" 
                        title="Somente números" 
                        value={form.telefone} 
                        onChange={handleChange} 
                    />
                    <Input                                          //CPF
                        type="text" 
                        name="cpf" 
                        placeholder="CPF" 
                        pattern="\d{11}" 
                        title="Somente 11 dígitos" 
                        maxLength={11} 
                        value={form.cpf} 
                        onChange={handleChange} 
                    />
                    <Dropdown                                          //SERVIÇO
                        options={['Serviço 1', 'Serviço 2', 'Serviço 3']} 
                        placeholder="Serviço" 
                        name="servico" 
                        value={form.servico} 
                        onChange={handleChange} 
                    />
                    <Dropdown                                           //PROFISSIONAL
                        options={['Profissional 1', 'Profissional 2', 'Profissional 3']} 
                        placeholder="Profissional" 
                        name="profissional" 
                        value={form.profissional} 
                        onChange={handleChange} 
                    />
                    <Input                                           //DATA
                        type="date" 
                        name="data" 
                        placeholder="Data" 
                        value={form.data} 
                        onChange={handleChange} 
                    />
                    <TimeSelector                                          //HORÁRIO
                        availableTimes={['13:00', '14:00', '15:00']} 
                        name="horario" 
                        value={form.horario} 
                        onChange={handleChange} 
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.buttonContainer}>
                        <Button type="button" className={styles.back} link="./#">Voltar</Button>
                        <Button type="submit">Marcar</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}