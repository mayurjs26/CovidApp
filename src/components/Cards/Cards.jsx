import React from 'react';
import {Card, CardContent,Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
const Cards = (props) => {
    console.log(props)
    if (!props.data.confirmed){
        return "Loading....."
    }
    return (
        <div>
            <Grid container spacing = {3} justify = "center">
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography>
                            Confirmed
                        </Typography>
                        <Typography>
                            <CountUp start ={0} end={props.data.confirmed} duration = {4} separator ="," startOnMount = {false}></CountUp>
                            
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography>
                            Recovered
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.recovered} duration = {4} separator =","></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography>
                            Death
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.death} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography>
                            Active
                        </Typography>
                        <Typography>
                        <CountUp start ={0} end={props.data.active} duration = {4} separator ="," startOnMount = {false}></CountUp>
                        </Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;