import Button from '../Buttom';
import styles from './styles.module.scss';
import Image from 'next/image'
import dog from "../../../public/img/dog.png"

export default function Header() {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>Pet Care</h1>
                <p>Veterinario a domicilio</p>
                <a href='#' className="btn btn-primary">
                    Agende uma Visita
                </a>
            </div>
            <div className={styles.image}>
                <Image className={styles.pet}
                    src={dog}
                    width={480}
                    height={480}
                    alt="doutor"
                />
            </div>

        </section>
    )
}