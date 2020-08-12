import * as React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { StylesContext } from '@material-ui/styles';
import styles from './Charts.module.css'
const Charts = (props) => {
    const dailyData = props.data;
    console.log(dailyData)
    // useEffect(() => {

    // });


    const lineChart = (
    dailyData.length?
    (
        <Line
        data = {{
            labels:dailyData.map(({date}) => date),
            datasets:[{
               data: dailyData.map(({totalconfirmed}) => totalconfirmed),
               label:'Confirmed',
               fill : true,
               spanGaps : false
            }]
        }}
        
        
        />
    ):null
    );
    return (
        
        <div className = {styles.container}> 
        {lineChart}
        </div>
        
        )
}

export default Charts;