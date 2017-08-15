#!/usr/bin/env node

var axios = require('axios')
//console.log(process.argv)

var data = {}
if(process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}
axios.get('http://api.jirengu.com/weather.php',data)
.then(function(response){
    console.log('日期：'+response.data.results[0].weather_data[0].date)
    console.log('天气：'+response.data.results[0].weather_data[0].weather)
    console.log('风力：'+response.data.results[0].weather_data[0].wind)
    console.log('气温：'+response.data.results[0].weather_data[0].temperature)
    console.log('pm2.5：'+response.data.results[0].pm25)
}).catch(function(error){
    console.log('数据抽风了。。。')
})