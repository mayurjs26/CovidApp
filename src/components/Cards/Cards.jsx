import React from 'react';
import {Card, CardContent,Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css'
const Cards = (props) => {
    console.log(props)
    if (!props.data.confirmed){
        return "Loading....."
    }
    return (
        <div className = {styles.cardcontainer}>
            <Grid container spacing = {3} justify = "center">
                <div className = {styles.card}>
                <Grid  item component ={Card} >
                    <CardContent >
                        <Typography >
                            Confirmed
                        </Typography>
                        <Typography>
                            <CountUp start ={0} end={props.data.confirmed} duration = {4} separator ="," startOnMount = {false}></CountUp>
                            
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent>
                        <Typography>
                            Recovered
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.recovered} duration = {4} separator =","></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent>
                        <Typography>
                            Death
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.death} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent>
                        <Typography>
                            Active
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.active} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default Cards;