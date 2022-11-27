import React, {useState} from 'react'
import Axios from 'axios'
import Afasi_Athan from '/Users/nadeemasad/Desktop/athan-api/src/audio/Afasi_Athan.mp3'

function AthanSearch() {
    const [data,setData]= useState({})
    const [location,setLocation]=useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const audio = new Audio(Afasi_Athan)



    
    const url =`https://dailyprayer.abdulrcs.repl.co/api/${location}`



    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear();
    let hours = newDate.getHours()
    let minutes= newDate.getMinutes()


    
     minutes = newDate.getMinutes()


     hours = (date) => {

        let ampm = date.getHours() >= 12 ? 'pm' : 'am'
        return `${(date.getHours() % 12  || 12)}:${minutes} ${ampm}`
        

    
    }

    const start = () => {
      audio.play()
    } 


    // if (newDate.getHours() === data.today.Fajr || 
    //   data.today.Sunrise || 
    //   data.today.Dhuhr||
    //   data.today.Asr||
    //   data.today.Maghrib ||
    //   data.today["Isha'a" ]){

    //   audio.play()
    // } 
    

    

 
    function searchLocation(event) {
    if (event.key === 'Enter') {
      setLoading("https://thumbs.gfycat.com/BlondNiceIbisbill-size_restricted.gif")
      setData('')
      Axios.get(url).then((response) => {
        setLoading('')
        setData(response.data)
        console.log(response.data)
        setLocation('')
        // Axios.get(url).then((response) => {
        //   setData(response.data) 
        //   console.log(response.data)
        //   setLocation('')
      })


    }
  } if (!response.data){
    setError("Unable to get Prayer Times for "+ location)
  }

  
      

  return (
    
    <div className ="AthanSearch">
    <div className="Search">
    <input

    value={location}
    onChange={event => setLocation(event.target.value)}
    onKeyPress={searchLocation}
    type="text"
    placeholder="Search by city name" />
    </div>



    <div className="Container">
       <div className="prayerTime"> 


    <div className="topx">
      
       <p class ="font-bold">{(hours(new Date()))}</p>
       <p class ="font-bold">{data.city}</p>
       <p class ="font-bold">{month<10?`0 ${month}`:`${month}`}{'/'}{date}{'/'}{year}</p>
       <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={start}>Play</button>





    </div>
       {/* {data ? null : <p> Cannot Get Prayer Times </p> } */}
       {loading ? <p>Getting prayer times for {location} <br/><br/> <img style={{width: 200, height: 200, position: 'relative', left: '42%'}} src={loading}/></p> : null}
       {data.today ?<p class ="hover:font-bold cursor-default">Fajr: {data.today.Fajr }</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Sunrise: {data.today.Sunrise}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Dhuhr: {data.today.Dhuhr}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Asr: {data.today.Asr}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Maghrib:{data.today.Maghrib} </p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Ishaa: {data.today["Isha'a" ] } </p> :null}

       
       {/* <button onClick="" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Prayer Times for current location</button> */}

    </div>

    </div>



  </div>
    

  )
  
  
}




export default AthanSearch



