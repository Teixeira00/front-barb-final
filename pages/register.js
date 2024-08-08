// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/index.module.css';
// import Input from '../src/components/input/input';
// import Button from '../src/components/button/button';
// import Card from '../src/components/Card/Card';
// import Dropdown from '../src/components/dropdown/dropdown';
// import Link from 'next/link';
// import TimeSelector from '../src/components/timeSelector/timeSelector';
// import { useState } from 'react';
// import { useRouter } from 'next/router';


// const validateCNPJ = (cnpj) => {
//     return cnpj.length === 11;
// };

// export default function Register() {
//     const optionsService = ['Serviço 1', 'Serviço 2', 'Serviço 3'];
//     const optionsProf = ['Profissional 1', 'Profissional 2', 'Profissional 3'];
//     const availableTimes = ['13:00', '14:00', '15:00'];

//     const [form, setForm] = useState({
//         nome: '',
//         telefone: '',
//         cnpj: '',
//         // servico: '',
//         // profissional: '',
//         // data: '',
//         // horario: '',
//     });

//     const [error, setError] = useState('');

//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const isFormComplete = Object.values(form).every((value) => value.trim() !== '');
//         const isCpfValid = validateCPF(form.cnpj);

//         if (!isFormComplete) {
//             setError('Necessário preencher todos os dados');
//         } 
//         // else if (!isCpfValid) {
//         //     setError('O CNPJ deve ter exatamente 14 dígitos');
//         // } 
//         else {
//             setError('');
//             localStorage.setItem(`agendamento_${form.cnpj}`, JSON.stringify(form));
//             router.push('/consultInfo?cnpj=' + form.cnpj);
//         }
//     };

//     return (
//         <div className={styles.background}>
//             <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Cadastro no sistema">
//                 <form className={styles.form} onSubmit={handleSubmit}>
//                     <Input                                          //NOME
//                         type="text" 
//                         name="nome" 
//                         placeholder="Nome Completo" 
//                         pattern="[A-Za-z ]+" 
//                         title="Somente caracteres" 
//                         value={form.nome} 
//                         onChange={handleChange} 
//                     />
//                     <Input                                          //TELEFONE 
//                         type="text" 
//                         name="telefone" 
//                         placeholder="Telefone" 
//                         pattern="[0-9 ]+" 
//                         title="Somente números" 
//                         value={form.telefone} 
//                         onChange={handleChange} 
//                     />
//                     <Input                                          //CNPJ
//                         type="text" 
//                         name="cnpj" 
//                         placeholder="CNPJ" 
//                         // pattern="\d{14}" 
//                         // title="Somente 14 dígitos" 
//                         // maxLength={14} 
//                         value={form.cnpj} 
//                         onChange={handleChange} 
//                     />
//                     {/* <Dropdown                                          //SERVIÇO
//                         options={optionsService} 
//                         placeholder="Serviço" 
//                         name="servico" 
//                         value={form.servico} 
//                         onChange={handleChange} 
//                     />
//                     <Dropdown                                           //PROFISSIONAL
//                         options={optionsProf} 
//                         placeholder="Profissional" 
//                         name="profissional" 
//                         value={form.profissional} 
//                         onChange={handleChange} 
//                     />
//                     <Input                                           //DATA
//                         type="date" 
//                         name="data" 
//                         placeholder="Data" 
//                         value={form.data} 
//                         onChange={handleChange} 
//                     />
//                     <TimeSelector                                          //HORÁRIO
//                         availableTimes={availableTimes} 
//                         name="horario" 
//                         value={form.horario} 
//                         onChange={handleChange} 
//                     /> */}
//                     {error && <p className={styles.error}>{error}</p>}
//                     <div className={styles.buttonContainer}>
//                         <Button type="button" className={styles.back} onClick={() => router.back()}>Voltar</Button>
//                         <Button type="submit">Registrar</Button>
//                     </div>
//                 </form>
//             </Card>
//         </div>
//     );
// }

import styles from '../styles/index.module.css';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Card from '../src/components/Card/Card';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        googleAccountId: '',
        name: '',
        cpf: '',
        phone: '',
        email: '',
        type: 'ADMIN',
        picture: ''
    });

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        const isFormComplete = Object.values(form).every((value) => value.trim() !== '');

        if (!isFormComplete) {
            setError('Necessário preencher todos os dados');
            setIsSubmitting(false);
        } else {
            setError('');

            const payload = {
                googleAccountId: form.googleAccountId,
                name: form.name,
                cpf: form.cpf,
                phone: form.phone,
                email: form.email,
                type: form.type,
                picture: form.picture
            };

            console.log('Payload:', JSON.stringify(payload));

            try {
                const response = await axios.post('http://localhost:4000/api/users', payload);
                if (response.status === 200) {
                    router.push('/consultInfo?cpf=' + form.cpf);
                } else {
                    setError('Erro ao registrar. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao enviar dados:', error);
                setError('Erro ao registrar. Tente novamente.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className={styles.background}>
            <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Cadastro no sistema">
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="googleAccountId"
                        placeholder="Google Account ID"
                        value={form.googleAccountId}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={form.cpf}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="phone"
                        placeholder="Telefone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="type"
                        placeholder="Tipo"
                        value={form.type}
                        onChange={handleChange}
                    />
                    {/* <Input
                        type="text"
                        name="picture"
                        placeholder="Foto"
                        value={form.picture}
                        onChange={handleChange}
                    /> */}
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.buttonContainer}>
                        <Button type="button" className={styles.back} onClick={() => router.back()}>Voltar</Button>
                        <Button type="submit" disabled={isSubmitting}>Registrar</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Register;
