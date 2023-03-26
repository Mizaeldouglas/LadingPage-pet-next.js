
import Form from "./Form";
import styles from './styles.module.scss';

export default function Footer() {
    return (
        <section className={styles.container}>
            <Form />
            <footer>
                ©2023 feito por
                <a href="https://www.linkedin.com/in/mizael-douglas-aa850a216/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Mizael Douglas de Mello
                </a>
                com propósito de estudos.
            </footer>
        </section>
    )
}