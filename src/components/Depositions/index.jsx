import styles from './styles.module.scss';
export default function Depositions() {
    return (
        <>
            <h1 className={styles.title} id="depositions" >O que os donos dizem</h1>
            <section className={styles.container}>
                <div className={styles.depositions}>
                    <h3>Muito Profissional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum ducimus autem iusto mollitia blanditiis eum
                        minus officiaillum quia ratione! Error ipsa,
                        illum iste alias dolore quae atque qui laboriosam!
                    </p>
                    <h5>Alice Mendes</h5>
                </div>
                <div className={styles.depositions}>
                    <h3>Ótimo Serviço</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum ducimus autem iusto mollitia blanditiis eum
                        minus officiaillum quia ratione! Error ipsa,
                        illum iste alias dolore quae atque qui laboriosam!
                    </p>
                    <h5>Daniel Melo</h5>
                </div>
                <div className={styles.depositions}>
                    <h3>Gentil e Amável</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum ducimus autem iusto mollitia blanditiis eum
                        minus officiaillum quia ratione! Error ipsa,
                        illum iste alias dolore quae atque qui laboriosam!
                    </p>
                    <h5>Beatriz Santos</h5>
                </div>

            </section>
        </>
    )
}