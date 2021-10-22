import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Container, Cell, Row } from './styles.js';


function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
  createData('Gingerbread', 356),
];

export default function BasicTable({ display }) {
  return (
    <Container display={display} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <Row head={true}>
            <Cell align="center">N°Cadastro</Cell>
            <Cell align="center">Nome</Cell>
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name}>
              <Cell align="center">{row.calories}</Cell>
              <Cell align="center">{row.name}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}