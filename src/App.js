import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards,Charts,CovidTable,StatePicker} from './components'
import {fetchStateData,getCountryStats, getJsonData} from './api'

class App extends React.Component{

  state = {
    cardsData :{},
    dailyData : [],
    allData : [],
    stateList : [],
    countryData : {}
  }

  async componentDidMount(){
    const fetchedDataList = await fetchStateData()
    const jsonData = await getJsonData();
    // console.log(jsonData)
    // console.log(data)
    const fetchedCountryData = await getCountryStats()
    this.setState({
    countryData:fetchedCountryData,
    stateList : fetchedDataList,
    allData : jsonData,
    cardsData : jsonData['statewise'][0],
    dailyData : jsonData['cases_time_series']
    
    })
    // console.log(this.state.cardsData);
    console.log(this.state.dailyData)
  }

  
  render(){
  return (
    
    <div className="App">
      
        
        <Cards data = {this.state.cardsData} ></Cards>
        
        <CovidTable data = {this.state.stateList} ></CovidTable>
        
        
        <Charts data = {this.state.dailyData}/>
        <StatePicker></StatePicker>
    </div>
  );
}
}

export default App;
