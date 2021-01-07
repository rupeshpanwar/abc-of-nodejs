const foreCast = require('./utils/foreCast');
const geoCode = require('./utils/geoCode')

 const city = process.argv[2]

 if(!city){
     console.log('please provide the city name')
 }
 else{
        geoCode(city,(error,{latitude,longitude,location}) =>{
        if(error){
            return console.log(error)
        }

            foreCast(latitude,longitude, (error,foreCastData)=>{
                if(error){
                    return console.log(error)
                }

                console.log(location)
                console.log(foreCastData)
            })
        })
 }


