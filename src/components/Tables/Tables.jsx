import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Tables.module.css'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
const CovidTable = (props) => {
    // console.log(props)
    const classes = useStyles()
    return (
      <div className = {styles.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>State/UT</TableCell>
                <TableCell align="right">Confirmed</TableCell>
                <TableCell align="right">Recovered</TableCell>
                <TableCell align="right">Death</TableCell>
                <TableCell align="right">Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row) => (
                <TableRow key={row.state}>
                  <TableCell component="th" scope="row">
                    {row.state}
                  </TableCell>
                  <TableCell align="right">{row.confirmed}</TableCell>
                  <TableCell align="right">{row.recovered}</TableCell>
                  <TableCell align="right">{row.death}</TableCell>
                  <TableCell align="right">{row.active}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
        </div>
      );
}

export default CovidTable;