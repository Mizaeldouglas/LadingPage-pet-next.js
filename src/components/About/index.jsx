import styles from "./styles.module.scss"
import doutor from "../../../public/img/doutor.png"
import Image from "next/image"

export default function About() {
    return (
        <section className={styles.container} id="about" >
            <div className={styles.image} >
                <Image className={styles.pet}
                    src={doutor}
                    alt="doutor"
                />
            </div>
            <div className={styles.text} >
                <h1>Sobre Mim</h1>
                <p>
                    Sou um parágrafo.
                    Clique aqui para editar e adicionar o seu próprio texto.
                    É fácil! Basta clicar em "Editar Texto"
                    ou clicar duas vezes sobre mim e você poderá adicionar o seu
                    próprio conteúdo e trocar fontes.
                    Sou um ótimo lugar para você contar sua história.
                </p>
                <a href='#' className="btn btn-primary">
                    Leia mais
                </a>
            </div>
        </section>
    )

}