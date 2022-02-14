import styles from '../styles/formulario.module.css'
import Cartao from "../components/cartao";
import Link from 'next/link';
import EntradaNumerica from '../components/entradaNumerica';
import { useState } from 'react';

export default function Formulario() {
  const [qtdePortas,setQtdePortas] = useState(3)
  const [comPresente,setComPresente] = useState(1)
  
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text='Quantas Portas?'
            value={qtdePortas}
            onChange={novaPortaComPresente => setQtdePortas(novaPortaComPresente)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text='Porta com Presente'
            value={comPresente}
            onChange={novaQtde => setComPresente(novaQtde)}/>
        </Cartao>
        <Cartao bgcolor='#28a085'>
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
