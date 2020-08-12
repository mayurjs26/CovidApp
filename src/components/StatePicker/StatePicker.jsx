import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './StatePicker.module.css'
const StatePicker = (props) => {
    var statesList = [];
    statesList = props.data;
    console.log(statesList)
    return (
 
        <FormControl>
            <NativeSelect defaultValue='' onChange = {(e) => props.stateChange(e.target.value)}>
                {statesList.map((state,i) => <option key ={i} value = {state.statecode}>{state.state}</option>)}
            </NativeSelect>

        </FormControl>
    
    )
}

export default StatePicker;