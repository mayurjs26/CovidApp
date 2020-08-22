import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Tables.module.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
const CovidTable = (props) => {
    console.log(props.data)
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
                  <TableCell align="right">
                    {  
                      row.deltaconfirmed !=0?(
                      <div className ={styles.arrow_cointainer}>
                      <ArrowUpwardIcon className = {styles.arrow} />{row.deltaconfirmed}
                      </div>):<div></div>
                    }
                    
                    {row.confirmed}</TableCell>
                  <TableCell align="right">
                  {  
                      row.deltarecovered !=0?(
                      <div className ={styles.recovered_container}>
                      <ArrowUpwardIcon/>{row.deltarecovered}
                      </div>):<div></div>
                    }
                  {row.recovered}</TableCell>
                  <TableCell align="right">
                  {  
                      row.deltadeaths !=0?(
                      <div className ={styles.death_cointainer}>
                      <ArrowUpwardIcon />{row.deltadeaths}
                      </div>):<div></div>
                    }
                    {row.deaths}</TableCell>
                  <TableCell align="right">
                  <div>

                  </div>
                  {row.active}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
        </div>
      );
}

export default CovidTable;