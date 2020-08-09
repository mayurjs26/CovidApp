import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards,Charts,CovidTable,StatePicker} from './components'
import {fetchStateData,getCountryStats} from './api'

class App extends React.Component{

  state = {
    stateList : [],
    countryData : {}
  }

  async componentDidMount(){
    const fetchedDataList = await fetchStateData()
    // console.log(data)
    const fetchedCountryData = await getCountryStats()
    this.setState({countryData:fetchedCountryData,
    stateList : fetchedDataList
    })
  }

  
  render(){
  return (
    
    <div className="App">
        <h1>App</h1>
        <Cards data = {this.state.countryData}></Cards>
        <Charts/>
        <CovidTable data = {this.state.stateList}></CovidTable>
        <StatePicker></StatePicker>
    </div>
  );
}
}

export default App;
