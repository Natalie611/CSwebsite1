var weather;
function setup(){
    createCavas(400,200)
    loadJSON('http://dataservice.accuweather.com/forecasts/v1/daily/1day/349727?apikey=NC8SiGA6OirwDDm339SIy9GOjBWHHP6C')

}

function gotData(data){
    weather = data;

}


function myfunction(){
    if(weather){
        var temp; 
        temp = DailyForecasts.Temperature.Maximum.Value;
    }
    
}


