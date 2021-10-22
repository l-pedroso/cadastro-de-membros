import { Table, Modal } from '../../components';
import Button from '@mui/material/Button';
import {Header, Main} from './styles';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

    const [showTable, setShowTable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { logout } = useAuth0();

    function onRelatorioClick() {
        setShowTable(true);
    };

    function onRelatorioClose(){
        if(showTable){
            setShowTable(false);
        }
        
    }

    function onCadastrarClick() {
        setShowModal(true);
    };

    function onModalClose() {
        setShowModal(false);
    };

    return (
        <div onClick={onRelatorioClose}>
           {/* <TransitionsModal open={showModal} handleClose={onModalClose} />*/}
            <Header>
                <h3>Sistema de Cadastro de Membros</h3>
            </Header>

            <Main>
                <aside>
                    <h3>Menu</h3>
                    <div className="buttonContainer">
                        <Button onClick={onCadastrarClick} variant="contained">Cadastrar</Button>
                        <Button onClick={onRelatorioClick} variant="contained">Relatórios</Button>
                        <Button variant="contained">Requerimentos</Button>
                        <Button onClick={() => logout({ returnTo: window.location.origin })}
                            variant="contained">Sair</Button>
                    </div>
                </aside>
                <div className="tableContainer">
                    <Table className="table" display={showTable} />
                </div>
            </Main>
            <Modal open={showModal} handleClose={onModalClose}/>
        </div>
    );
};

export default Dashboard;