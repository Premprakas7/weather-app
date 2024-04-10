import React, { useEffect, useState } from 'react'
import "./Style.css"
import WeatherCard from './WeatherCard'


const Temperature = () => {
const [searchValue,setSearchValue]=useState("Lucknow")
const [tempInfo,setTempInfo]=useState({})

const getWeatherInfo = async()=>{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3fa3a218ecb5ecc01e648340d58541e6`
    const res= await fetch (url);
    const data= await res.json()
// console.log(data)
    const {temp ,humidity,pressure}=data.main;
    const {main:weatherkamood}=data.weather[0]
    const {name}=data
    const {speed}=data.wind;
    const {country,sunrise,sunset}=data.sys

        const myNewWeatherInfo={
            temp ,humidity,pressure,
            weatherkamood,speed,name,
            country,sunrise,sunset
        }
    setTempInfo(myNewWeatherInfo)
    // console.log(temp)
   }
    catch(err){
        console.log(err)
    }
}

useEffect(()=>{
     getWeatherInfo();
        },[getWeatherInfo])


  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search" 
            placeholder='search ...' 
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />


            <button className='searchButton' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
   
    <WeatherCard  {...tempInfo} />
    
    </>
  )
}

export default Temperature