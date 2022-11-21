import React, {useState} from 'react'
import Axios from 'axios'

function AthanSearch() {
    const [data,setData]= useState({})
    const [location,setLocation]=useState('')
    const [loading, setLoading] = useState('')
    // const [loading, setLoading] = useState(true) 

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

   
    

 
    const searchLocation = (event) => {
        if (event.key === 'Enter') {  
          setLoading("https://media1.giphy.com/media/cLSCzIgK8TLDToM3go/giphy.gif?cid=790b76116571ac295b08a13c280c8fa1c29552c75b2969ce&rid=giphy.gif&ct=s");
          setData('');
          Axios.get(url).then((response) => {
            setLoading('');
            setData(response.data) 
            console.log(response.data)
            setLocation('')
          })
  
        }
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

    </div>
      {loading ? <p>Getting prayer times for {location} <br/><br/> <img style={{width: 100, height: 100}} src={loading}/></p> : null}
       {data.today ?<p class ="hover:font-bold cursor-default">Fajr: {data.today.Fajr}</p> : null}
       {data.today ?<p class ="hover:font-bold cursor-default">Sunrise: {data.today.Sunrise}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Dhuhr: {data.today.Dhuhr}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Asr: {data.today.Asr}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Maghrib: {data.today.Maghrib}</p> :null}
       {data.today ?<p class ="hover:font-bold cursor-default">Ishaa: {data.today["Isha'a" ]} </p> :null }


       {/* <button onClick="" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Prayer Times for current location</button> */}

    </div>

    </div>



  </div>
    

  )
  
}



export default AthanSearch



