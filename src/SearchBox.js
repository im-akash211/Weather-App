import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function SearchBox({updateinfo}) {
    const[city,setcity] = useState("");
    const[err,seterr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "04c20b1e9ff2459bc797558faeac7f92";

    async function getweatherInfo() {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse)
        let result = {
            city : city,
            temperature : jsonresponse.main.temp,
            tempMin : jsonresponse.main.temp_min,
            tempMax : jsonresponse.main.temp_max,
            humidity : jsonresponse.main.humidity,
            feelsLike : jsonresponse.main.feels_like,
            weather : jsonresponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err) {
            throw err;
        }
    }

    function handlechange(e) {
        setcity(e.target.value)
    }

    async function handlesubmit(e) {
        try{
        e.preventDefault();
        console.log(city);
        setcity("");
        let newInfo = await getweatherInfo();
        updateinfo(newInfo)
        }catch(err) {
            seterr(true);
        }
    }
    return (
        <>
        <div className='searchbox'>
            <h3>Search For Weather</h3>
            <form>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type = "submit" onClick={handlesubmit}>Search</Button>
            {err && <p style={{color:"red"}}>No such place found!</p>}
            </form>
        </div>
        </>
    )
}

export default SearchBox;