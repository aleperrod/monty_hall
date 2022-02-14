import styles from '../../../styles/jogo.module.css'
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Jogo(){
    const router = useRouter()

    const [portas, setPortas] = useState([])
    const [valido,setValido] = useState(false)
    
    useEffect(() => {
        const portas = +router.query.portas
        const presente = +router.query.temPresente

        const qtdePortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = presente > 0 && presente <= portas

        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas,router.query.portas,router.query.temPresente])
    
    useEffect(() => {
        const portas = +router.query.portas
        const presente = +router.query.temPresente
        setPortas(criarPortas(portas,presente))

    }, [router?.query])

    function renderizarPortas(){
        return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas,novaPorta))}/>
        })
    }
    
    return(
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? 
                    renderizarPortas() :
                    <h2>Valores Inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href='/' passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}