import React from 'react';
import {Card, CardContent,Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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
                    <CardContent className = {styles.confirmed}>
                        <Typography  >
                            Confirmed
                        </Typography>
                        <Typography  >
                            <ArrowUpwardIcon/>
                        <CountUp start ={0} end={props.data.deltaconfirmed} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>
                        <Typography>
                            <CountUp start ={0} end={props.data.confirmed} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent className = {styles.recovered}>
                        <Typography>
                            Recovered
                        </Typography>
                        <Typography  >
                        <ArrowUpwardIcon/>
                        <CountUp start ={0} end={props.data.deltarecovered} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.recovered} duration = {4} separator =","></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent className = {styles.death}>
                        <Typography>
                            Death
                        </Typography>
                        <Typography  >
                        <ArrowUpwardIcon/>
                        <CountUp start ={0} end={props.data.deltadeaths} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.deaths} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                </div>
                <div className = {styles.card}>
                <Grid item component ={Card} className = {styles.card}>
                    <CardContent className = {styles.active}>
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