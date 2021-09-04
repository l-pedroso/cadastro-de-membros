import { DropMenu, BasicTable, TransitionsModal } from '../../components';
import Button from '@material-ui/core/Button';
import useStyle from './styles';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

    const classes = useStyle();
    const [showTable, setShowTable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { logout } = useAuth0();

    function onRelatorioClick() {
        setShowTable(!showTable);
    };

    function onCadastrarClick() {
        setShowModal(true);
    };

    function onModalClose() {
        setShowModal(false);
    };

    return (
        <div className={classes.wrapper}>
            <TransitionsModal open={showModal} handleClose={onModalClose} />
            <header className={classes.header}>
                <h3 className={classes.title}>Sistema de Cadastro de Membros</h3>
            </header>

            <main className={classes.mainContainer}>
                <aside className={classes.asideContainer}>
                    <h3>Menu</h3>
                    <div className={classes.buttonContainer}>
                        <Button className={classes.button} onClick={onCadastrarClick} variant="contained">Cadastrar</Button>
                        <Button className={classes.button} variant="contained">Alterar</Button>
                        <Button className={classes.button} variant="contained">Deletar</Button>
                        <Button className={classes.button} onClick={onRelatorioClick} variant="contained">Relatórios</Button>
                        <Button className={classes.button} variant="contained">Requerimentos</Button>
                        <Button className={classes.button} onClick={() => logout({ returnTo: window.location.origin })}
                            variant="contained">Sair</Button>
                    </div>
                </aside>
                <div className={classes.tableContainer}>

                    <BasicTable className={classes.table} display={showTable} />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;