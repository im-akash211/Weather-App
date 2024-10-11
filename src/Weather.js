import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, {useState} from "react";

function Weather() {
    const[weatherinfo,setweatherinfo] = useState({
        city : "Delhi",
        temperature : 36.05,
        humidity : 63,
        tempMin : 36.05,
        tempMax: 36.05,
        feelsLike : 43.05,
        weather : "haze",
    })

    function updateInfo(result) {
        setweatherinfo(result);
    }
    return (
        <div>
            <SearchBox updateinfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}
export default Weather;