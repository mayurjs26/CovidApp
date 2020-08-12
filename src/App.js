import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards,Charts,CovidTable,StatePicker} from './components'
import {fetchStateData,getCountryStats, getJsonData,getStateChartData} from './api'

class App extends React.Component{

  state = {
    cardsData :{},
    stateDailyData:[],
    dailyData : [],
    allData : [],
    stateList : [],
    countryData : {},
    states:[]
  }

  async componentDidMount(){
    const fetchedDataList = await fetchStateData()
    const jsonData = await getJsonData();
    const stateDailyDataJson = await getStateChartData();
    const fetchedCountryData = await getCountryStats()
    this.setState({
    countryData:fetchedCountryData,
    stateList : fetchedDataList,
    allData : jsonData,
    cardsData : jsonData['statewise'][0],
    dailyData : jsonData['cases_time_series'],
    states: jsonData['statewise'].map(({state,statecode} )=> ({state,statecode})),
    stateDailyData:stateDailyDataJson

    })
    console.log(this.state.stateDailyData)
  }

  onStateChange = async (state) => {
    console.log(state)
    const stateData = this.state.stateDailyData;
    const dates = this.state.stateDailyData[state]['dates'];
    // console.log(dates)
    const stateChartData = Object.keys(dates).map((key,value) => {
      var date = key;
      var confirmedCases = stateData[state]['dates'][key]['total']['confirmed'];
      var recoveredCases = stateData[state]['dates'][key]['total']['recovered'];
      var deathCases = stateData[state]['dates'][key]['total']['deceased']
      return {
        "date" : key ,
        "confirmed" : confirmedCases,
        "recovered":recoveredCases,
        "deaths": deathCases
      };
    })

    console.log(stateChartData)
  }

  
  render(){
  return (
    
    <div className="App">
      <div className = "container">
        
        <Cards data = {this.state.cardsData} ></Cards>
        
        <CovidTable data = {this.state.stateList} ></CovidTable>
        
        
        <Charts data = {this.state.dailyData}/>
        <StatePicker data= {this.state.states} stateChange = {this.onStateChange}></StatePicker>
    </div>
    </div>
  );
}
}

export default App;
