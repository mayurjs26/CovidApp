import axios from 'axios';
const url  = "https://api.covid19india.org/state_district_wise.json"

export const fetchStateData = async() =>{
    var stateData = {confirmed:0,recovered:0,state:String,death:0,active:0};
    const dataList = []
    try{
        const response = await axios.get(url);
        // console.log(typeof(response))
        for (const[key,value] of Object.entries(response.data)){
            // console.log(key)
            var confirmed = 0
            var recovered = 0
            var death = 0
            var active = 0
            stateData = {state:key}
            for (const [k,v] of Object.entries(value['districtData'])){
                
                confirmed = confirmed + v['confirmed']
                recovered = recovered + v['recovered']
                death = death + v['deceased']
                active = active + v['active']
                stateData['confirmed'] = confirmed
                stateData['recovered'] = recovered
                stateData['death'] = death
                stateData['active'] = active
            }

            dataList.push(stateData)
        }
        // console.log(dataList)
        return dataList
    }
    catch(error){
        console.log(error)
    }
}

export const getCountryStats = async() =>{
        const stateDataList = await fetchStateData()
        
        var confirmed = 0;
        var recovered = 0;
        var death = 0;
        var active = 0;
            
        stateDataList.forEach(e => {
            confirmed = confirmed + e['confirmed']
            recovered = recovered + e['recovered']
            death = death + e['death']
            active = active + e['active']
        });

        return {confirmed,recovered,death,active}
}

export const getJsonData = async() =>{
    const url = "https://api.covid19india.org/data.json";
    const jsonData = await axios.get(url)
    console.log(jsonData['data']);
    return jsonData['data'];
}