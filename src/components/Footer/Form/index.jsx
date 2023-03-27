import { Button, TextField, Box, useTheme } from "@mui/material";
import styles from './styles.module.scss';

export default function Form() {
    return (
        <>

            <form id="contato" className={styles.container}>
                <h1>Contato</h1>
                <div className={styles.list}>
                    <ul>
                        <label>Telefone</label>
                        <li>(11) 3456-7890</li>
                    </ul>
                    <ul>
                        <label>Email</label>
                        <li>info@meusite.com</li>
                    </ul>
                    <ul>
                        <label>Horario</label>
                        <li>
                            Seg - Sex: 9:00 - 20:00 <br />
                            Sáb: 9:00 - 16:00
                        </li>
                    </ul>
                    <ul>
                        <label>Area de serviços</label>
                        <li>
                            São Paulo e
                            interior
                        </li>
                    </ul>
                </div>
                <div className={styles.formArea}>
                    <Box
                        sx={{
                            width: 700,
                            height: 100,
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >

                        <TextField className={styles.formAreaNameEmail}
                            sx={{
                                marginLeft: 5,
                                width: 300,
                            }}
                            id="nome"
                            label="Nome"
                            variant="standard"
                        />
                        <TextField
                            sx={{
                                marginLeft: 5,
                                width: 300,
                            }}
                            id="email"
                            label="Email"
                            variant="standard"
                        />
                    </Box>
                    <TextField
                        sx={{
                            marginLeft: 10,
                            paddingBottom: 5,
                            width: 700,
                        }}
                        id="assunto"
                        label="Assunto"
                        variant="standard"
                    />
                    <TextField
                        sx={{
                            marginLeft: 10,
                            paddingBottom: 5,
                            width: 700,
                        }}
                        id="filled-textarea"
                        label="Digite sua mensagem aqui"
                        placeholder="Digite sua mensagem aqui"
                        multiline
                        variant="filled"
                    />
                    <Button
                        sx={{
                            color: "white",
                            fontSize: 10,
                            paddingBottom: 5,
                            width: 100,
                        }}
                        variant="text">
                        Enviar
                    </Button>
                </div>

            </form>

        </>
    )
}