import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/consultInfo.module.css';
import Card from '../src/components/Card/Card';
import Button from '../src/components/button/button';
import Confirmation from '../src/components/confirmation/confirmation';

export default function ConsultInfo() {
    const router = useRouter();
    const { query } = router;
    const { cpf } = query;

    const [agendamento, setAgendamento] = useState(null);
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const agendamentoData = localStorage.getItem(`agendamento_${cpf}`);
            if (agendamentoData) {
                setAgendamento(JSON.parse(agendamentoData));
                setMessage(''); // Limpar mensagem se encontrado
            } else {
                setAgendamento(null);
                setMessage('Agendamento não encontrado. Verifique o CPF e tente novamente.');
            }
        }
    }, [cpf]);

    const handleBackClick = () => {
        router.push('/#'); // Redireciona para a página de consulta de CPF
    };

    const handleConsultAnotherClick = () => {
        router.push('/consult'); 
    };

    const handleDelete = () => {
        setIsModalOpen(true); // Abre o modal de confirmação
    };

    const confirmDelete = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(`agendamento_${cpf}`);
            setAgendamento(null);
            setMessage('Agendamento excluído com sucesso.');
            setIsModalOpen(false); // Fecha o modal
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
                {agendamento ? (
                    <div className={styles.form}>
                        <p><strong>Nome:</strong> {agendamento.nome}</p>
                        <p><strong>Telefone:</strong> {agendamento.telefone}</p>
                        <p><strong>CPF:</strong> {agendamento.cpf}</p>
                        <p><strong>Serviço:</strong> {agendamento.servico}</p>
                        <p><strong>Profissional:</strong> {agendamento.profissional}</p>
                        <p><strong>Data:</strong> {agendamento.data}</p>
                        <p><strong>Horário:</strong> {agendamento.horario}</p>
                        <Button type="button" onClick={handleDelete} className={styles.deleteButton}>
                            Excluir Agendamento
                        </Button>
                    </div>
                ) : (
                    !message && <p>Carregando...</p>
                )}
                <div className={styles.buttonContainer}>
                    <Button type="button" onClick={handleBackClick}className={styles.back}>Voltar</Button>
                    <Button type="button" onClick={handleConsultAnotherClick}>Consultar Outro CPF</Button>
                </div>
            </Card>
            <Confirmation 
                isOpen={isModalOpen} 
                onConfirm={confirmDelete} 
                onCancel={cancelDelete}
                originalCpf={cpf} // Passa o CPF original para o modal de confirmação
            />
        </div>
    );
}
