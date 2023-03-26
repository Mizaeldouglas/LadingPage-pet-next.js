import Button from '../Buttom';
import styles from './styles.module.scss';
import { MdPets } from 'react-icons/md'

export default function NavBar() {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <p>
                    <MdPets /> Dr.Lucas
                </p>
            </div>
            <div className={styles.listMenu}>
                <ul>
                    <li><a href="#">Pagina Inicial</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contato</a></li>
                    <div className={styles.buttom}>
                        <a href='#' className="btn btn-primary">
                            LIGUE: (11) 3456-7890
                        </a>
                    </div>
                    {/* <div className={styles.buttom}><Button link={"#"} text={"LIGUE: (11) 3456-7890"} /> </div> */}
                </ul>
            </div>
        </nav>
    )
}