import gallery1 from "../../../public/img/gallery1.png"
import gallery2 from "../../../public/img/gallery2.png"
import gallery3 from "../../../public/img/gallery3.png"
import gallery4 from "../../../public/img/gallery4.png"
import gallery5 from "../../../public/img/gallery5.png"
import gallery6 from "../../../public/img/gallery6.png"

import Image from "next/image";
import styles from './styles.module.scss';

export default function Gallery() {
    return (
        <>
            <h1 className={styles.title}>amo meus clientes</h1>
            <section className={styles.container}>
                <div className={styles.containerSection}>
                    <Image className={styles.img}
                        src={gallery1}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                    <Image className={styles.img}
                        src={gallery2}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                    <Image className={styles.img}
                        src={gallery3}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                    <Image className={styles.img}
                        src={gallery4}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                    <Image className={styles.img}
                        src={gallery5}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                    <Image className={styles.img}
                        src={gallery6}
                        width={380}
                        height={280}
                        alt="gallery"
                    />
                </div>
            </section>
        </>
    )
}