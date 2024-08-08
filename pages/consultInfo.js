// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/consultInfo.module.css';
// import Card from '../src/components/Card/Card';
// import Button from '../src/components/button/button';
// import Confirmation from '../src/components/confirmation/confirmation';

// export default function ConsultInfo() {
//     const router = useRouter();
//     const { query } = router;
//     const { cnpj } = query;

//     const [agendamento, setAgendamento] = useState(null);
//     const [message, setMessage] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const agendamentoData = localStorage.getItem(`agendamento_${cnpj}`);
//             if (agendamentoData) {
//                 setAgendamento(JSON.parse(agendamentoData));
//                 setMessage(''); // Limpar mensagem se encontrado
//             } else {
//                 setAgendamento(null);
//                 setMessage('Agendamento não encontrado. Verifique o CNPJ e tente novamente.');
//             }
//         }
//     }, [cnpj]);

//     const handleBackClick = () => {
//         router.push('/#'); // Redireciona para a página de consulta de CNPJ
//     };

//     const handleConsultAnotherClick = () => {
//         router.push('/consult'); 
//     };

//     const handleDelete = () => {
//         setIsModalOpen(true); // Abre o modal de confirmação
//     };

//     const confirmDelete = () => {
//         if (typeof window !== 'undefined') {
//             localStorage.removeItem(`agendamento_${cnpj}`);
//             setAgendamento(null);
//             setMessage('Agendamento excluído com sucesso.');
//             setIsModalOpen(false); // Fecha o modal
//         }
//     };

//     const cancelDelete = () => {
//         setIsModalOpen(false); // Fecha o modal
//     };

//     return (
//         <div className={styles.background}>
//             <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">
//                 {message && (
//                     <div className={styles.messageContainer}>
//                         <p className={message.includes('excluído') ? styles.successMessage : styles.errorMessage}>
//                             {message}
//                         </p>
//                     </div>
//                 )}
//                 {agendamento ? (
//                     <div className={styles.form}>
//                         <p><strong>Nome:</strong> {agendamento.nome}</p>
//                         <p><strong>Telefone:</strong> {agendamento.telefone}</p>
//                         <p><strong>CNPJ:</strong> {agendamento.cnpj}</p>
//                         {/* <p><strong>Serviço:</strong> {agendamento.servico}</p>
//                         <p><strong>Profissional:</strong> {agendamento.profissional}</p>
//                         <p><strong>Data:</strong> {agendamento.data}</p>
//                         <p><strong>Horário:</strong> {agendamento.horario}</p> */}
//                         <Button type="button" onClick={handleDelete} className={styles.deleteButton}>
//                             Excluir Agendamento
//                         </Button>
//                     </div>
//                 ) : (
//                     !message && <p>Carregando...</p>
//                 )}
//                 <div className={styles.buttonContainer}>
//                     <Button type="button" onClick={handleBackClick}className={styles.back}>Voltar</Button>
//                     <Button type="button" onClick={handleConsultAnotherClick}>Consultar Outro CNPJ</Button>
//                 </div>
//             </Card>
//             <Confirmation 
//                 isOpen={isModalOpen} 
//                 onConfirm={confirmDelete} 
//                 onCancel={cancelDelete}
//                 originalCNPJ={cnpj} // Passa o CNPJ original para o modal de confirmação
//             />
//         </div>
//     );
// }




// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/consultInfo.module.css';
// import Card from '../src/components/Card/Card';
// import Button from '../src/components/button/button';
// import Confirmation from '../src/components/confirmation/confirmation';
// import axios from 'axios';

// export default function ConsultInfo() {
//     const router = useRouter();
//     const { query } = router;
//     const { cnpj } = query;

//     const [cadastro, setCadastro] = useState(null);
//     const [message, setMessage] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     useEffect(() => {
//         const fetchCadastro = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/api/barbershops/13`);
//                 if (response.status === 200 && response.data) {
//                     setCadastro(response.data);
//                     setMessage('');
//                 } else {
//                     setCadastro(null);
//                     setMessage('Cadastro não encontrado. Verifique o CNPJ e tente novamente.');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar cadastro:', error);
//                 setCadastro(null);
//                 setMessage('Erro ao buscar cadastro. Verifique o CNPJ e tente novamente.');
//             }
//         };

//         if (cnpj) {
//             fetchCadastro();
//         }
//     }, [cnpj]);

//     const handleBackClick = () => {
//         router.push('/#'); // Redireciona para a página de consulta de CNPJ
//     };

//     const handleConsultAnotherClick = () => {
//         router.push('/consult'); 
//     };

//     const handleDelete = () => {
//         setIsModalOpen(true); // Abre o modal de confirmação
//     };

//     const confirmDelete = async () => {
//         try {
//             const response = await axios.delete(`http://localhost:4000/api/barbershops/13`);
//             if (response.status === 200) {
//                 setCadastro(null);
//                 setMessage('Cadastro excluído com sucesso.');
//                 setIsModalOpen(false); // Fecha o modal
//             } else {
//                 setMessage('Erro ao excluir cadastro. Tente novamente.');
//             }
//         } catch (error) {
//             console.error('Erro ao excluir cadastro:', error);
//             setMessage('Erro ao excluir cadastro. Tente novamente.');
//         }
//     };

//     const cancelDelete = () => {
//         setIsModalOpen(false); // Fecha o modal
//     };

//     return (
//         <div className={styles.background}>
//             <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">
//                 {message && (
//                     <div className={styles.messageContainer}>
//                         <p className={message.includes('excluído') ? styles.successMessage : styles.errorMessage}>
//                             {message}
//                         </p>
//                     </div>
//                 )}
//                 {cadastro ? (
//                     <div className={styles.form}>
//                         <p><strong>Nome:</strong> {cadastro.nome}</p>
//                         <p><strong>Telefone:</strong> {cadastro.telefone}</p>
//                         <p><strong>CNPJ:</strong> {cadastro.cnpj}</p>
//                         <Button type="button" onClick={handleDelete} className={styles.deleteButton}>
//                             Excluir Cadastro
//                         </Button>
//                     </div>
//                 ) : (
//                     !message && <p>Carregando...</p>
//                 )}
//                 <div className={styles.buttonContainer}>
//                     <Button type="button" onClick={handleBackClick} className={styles.back}>Voltar</Button>
//                     <Button type="button" onClick={handleConsultAnotherClick}>Consultar Outro CNPJ</Button>
//                 </div>
//             </Card>
//             <Confirmation 
//                 isOpen={isModalOpen} 
//                 onConfirm={confirmDelete} 
//                 onCancel={cancelDelete}
//                 originalCNPJ={cnpj} // Passa o CNPJ original para o modal de confirmação
//             />
//         </div>
//     );
// }


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/consultInfo.module.css';
import Card from '../src/components/Card/Card';
import Button from '../src/components/button/button';
import Confirmation from '../src/components/confirmation/confirmation';
import axios from 'axios';

export default function ConsultInfo() {
    const router = useRouter();
    const { query } = router;
    const { id } = query; // Assume que o ID será passado na URL como query parameter

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/users/${id}`);
                if (response.status === 200 && response.data) {
                    setUser(response.data);
                    setMessage('');
                } else {
                    setUser(null);
                    setMessage('Cadastro não encontrado. Verifique o ID e tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao buscar cadastro:', error);
                setUser(null);
                setMessage('Erro ao buscar cadastro. Verifique o ID e tente novamente.');
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleBackClick = () => {
        router.push('/#'); // Redireciona para a página inicial
    };

    const handleConsultAnotherClick = () => {
        router.push('/consult'); 
    };

    const handleDelete = () => {
        setIsModalOpen(true); // Abre o modal de confirmação
    };

    const confirmDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/users/${id}`);
            if (response.status === 200) {
                setUser(null);
                setMessage('Cadastro excluído com sucesso.');
                setIsModalOpen(false); // Fecha o modal
            } else {
                setMessage('Erro ao excluir cadastro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao excluir cadastro:', error);
            setMessage('Erro ao excluir cadastro. Tente novamente.');
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false); // Fecha o modal
    };

    return (
        <div className={styles.background}>
            <Card nomeEmpresa="DOM CHICO BARBEARIA" title="Consulta">
                {message && (
                    <div className={styles.messageContainer}>
                        <p className={message.includes('excluído') ? styles.successMessage : styles.errorMessage}>
                            {message}
                        </p>
                    </div>
                )}
                {user ? (
                    <div className={styles.form}>
                        <p><strong>Google Account ID:</strong> {user.googleAccountId}</p>
                        <p><strong>Nome:</strong> {user.name}</p>
                        <p><strong>CPF:</strong> {user.cpf}</p>
                        <p><strong>Telefone:</strong> {user.phone}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Tipo:</strong> {user.type}</p>
                    </div>
                ) : (
                    !message && <p>Carregando...</p>
                )}
                <div className={styles.buttonContainer}>
                    <Button type="button" onClick={handleBackClick} className={styles.back}>Voltar</Button>
                    <Button type="button" onClick={handleConsultAnotherClick}>Consultar Outro ID</Button>
                </div>
            </Card>
        </div>
    );
}

