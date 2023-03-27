
import { Box } from "@mui/material";
import Form from "./Form";
import styles from './styles.module.scss';

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#3A54B4',
                    height: "50rem",
                    width: '134rem',

                }} >

                <Form />
                <footer className={styles.footer}>
                    ©2023 feito por
                    <a href="https://www.linkedin.com/in/mizael-douglas-aa850a216/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Mizael Douglas de Mello
                    </a>
                    com propósito de estudos.
                </footer>
            </Box>
        </>
    )
}