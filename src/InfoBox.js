import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

function InfoBox({info}) {
  let HOT_URL = "https://plus.unsplash.com/premium_photo-1666726721652-a15e685e48a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAINY_URL = "https://media.istockphoto.com/id/520773327/photo/caution-heavy-rain.jpg?s=2048x2048&w=is&k=20&c=SloIlg0jDiE8hmI_agNFXm9jDdw0bJPLOsJVCw9hdi4=";
return (
    <div className='InfoBox'>
        <h1>Weather - {info.weather}</h1>
        <div className='card-container'>
    <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      sx={{ height: 140 }}
      image = {info.humidity>80? RAINY_URL : info.temperature < 15? COLD_URL : HOT_URL}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {info.city}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <div>Temperature - {info.temperature}&deg;C</div>
        <div>Humidity - {info.humidity}&deg;C</div>
        <div>Minimum Temperature - {info.tempMin}&deg;C</div>
        <div>Maximum Temperature - {info.tempMax}&deg;C</div>
        <div>Feels Like - {info.feelsLike}&deg;C</div>
        <div>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</div>
      </Typography>
    </CardContent>
  </Card>
  </div>
  </div>
);
}
export default InfoBox;