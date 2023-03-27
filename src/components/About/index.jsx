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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                    praesentium eos temporibus suscipit fugiat autem consequatur doloremque
                    neque ipsum distinctio illum, modi ipsa quidem architecto rerum eum
                    reiciendis odit mollitia!
                </p>
                <a href='#' className="btn btn-primary">
                    Leia mais
                </a>
            </div>
        </section>
    )

}