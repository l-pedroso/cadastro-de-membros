import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyle from './styles';
import { useState, useEffect } from 'react';

function createData(number, name) {
  return { number, name };
}

const rows = [];

export default function BasicTable(props) {
  const classes = useStyle();
  const [member, setMember] = useState([]);


  useEffect(() => {
    /*fazer o fetch da api aqui*/
    
  }, [member])

  const { display } = props;
  if (!display) return null;

  function handleNewMember() {
    setMember([...member, rows.push(createData(515544, 'Felipe'))]);
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} onClick={handleNewMember} align="center">N° de cadastro</TableCell>
            <TableCell className={classes.tableCell} align="center">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell className={classes.tableCell} align="center">{row.number} </TableCell>
              <TableCell className={classes.tableCell} align="center">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}