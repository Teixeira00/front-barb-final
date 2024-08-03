import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Card from '../src/components/Card/Card'
import Dropdown from '../src/components/dropdown/dropdown'
import Link from 'next/link'
import TimeSelector from '../src/components/timeSelector/timeSelector'

export default function Register() {
  const optionsService = ['Serviço 1', 'Serviço 2', 'Serviço 3'];  //array que armazena lista de serviços prestados
  const optionsProf = ['Profissional 1', 'Profissional 2', 'Profissional 3'];  //array que armazena lista de profissionais
  const availableTimes = ['13:00','14:00','15:00']; //array que armazena lista de horas disponíveis

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
