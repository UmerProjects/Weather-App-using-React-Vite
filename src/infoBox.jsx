import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";

export default function InfoBox({ info }) {
  let Img_url =
    "https://plus.unsplash.com/premium_photo-1671962687834-ace92a99e634?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let cold_url =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hot_url =
    "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainy_url =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      {/* <h1>Weather Info</h1> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 70 ? rainy_url : info.temp > 30 ? hot_url : cold_url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {
            info.humidity > 70 ? <ThunderstormIcon/> : info.temp > 30 ? <WhatshotIcon/> : <AcUnitIcon/>
          }

          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min-temp = {info.tempMin}&deg;C</p>
            <p>Mix-temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as {info.weather} and Temperature
              feels like {info.feelsList}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
