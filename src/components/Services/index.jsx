import Image from "next/image";
import pet1 from "../../../public/img/petService1.png"
import pet2 from "../../../public/img/petService2.png"
import pet3 from "../../../public/img/petService3.png"
import styles from './styles.module.scss';

export default function Services() {
    return (
        <>

            <h1 className={styles.title}>Serviços</h1>
            <section className={styles.container}>

                <div className={styles.service} >
                    <div className={styles.serviceBrushing} >
                        <Image className={styles.img}
                            src={pet1}
                            width={230}
                            height={230}
                            alt="dog"
                        />
                        <h3>Escovação</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Delectus repudiandae voluptatum similique e
                            os consectetur eius dolore. Mollitia distinctio repellendus ab libero vel
                            temporibus. Ducimus, fugit reiciendis? Ipsum cumque cum mollitia.
                        </p>
                        <a href='#' className="btn btn-primary">
                            RESERVE JÀ
                        </a>
                    </div>


                    <div className={styles.serviceCheckup} >
                        <Image className={styles.img}
                            src={pet2}
                            width={230}
                            height={230}
                            alt="cat"
                        />
                        <h3>Checkup</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Delectus repudiandae voluptatum similique e
                            os consectetur eius dolore. Mollitia distinctio repellendus ab libero vel
                            temporibus. Ducimus, fugit reiciendis? Ipsum cumque cum mollitia.
                        </p>
                        <a href='#' className="btn btn-primary">
                            RESERVE JÀ
                        </a>
                    </div>


                    <div className={styles.serviceDental} >
                        <Image className={styles.img}
                            src={pet3}
                            width={230}
                            height={230}
                            alt="doug"
                        />
                        <h3>Dental</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Delectus repudiandae voluptatum similique e
                            os consectetur eius dolore. Mollitia distinctio repellendus ab libero vel
                            temporibus. Ducimus, fugit reiciendis? Ipsum cumque cum mollitia.
                        </p>
                        <a href='#' className="btn btn-primary">
                            RESERVE JÀ
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}