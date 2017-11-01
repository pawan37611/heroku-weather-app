import axios from 'axios'
export const root_url = 'https://weathersync.herokuapp.com/'
const myIp='ip?192.168.1.106'
const weatherUrl='weather/'

export function GetLocationByIp()
{
    const url=`${root_url}${myIp}`
    const location=axios.get(url);
  

return(
    {
        type:'Get-Location',
        payload:location
    }
)
}
export function GetWeatherByLoc(lat,lng)
{
    const url=`${root_url}${weatherUrl}${lat},${lng}`
    const weather=axios.get(url);
  

return(
    {
        type:'Get-Weather',
        payload:weather
    }
)
}
