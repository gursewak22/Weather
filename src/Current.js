import "./styles.css";
import data from "./weather.json";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import WindPowerIcon from "@mui/icons-material/WindPower";
import NearMeIcon from "@mui/icons-material/NearMe";
import AcUnitIcon from "@mui/icons-material/AcUnit";
export default function Current() {
  return (
    <div>
      <div className="container ">
        <h1 className="top">
          {data.query.results.channel.location.city},{" "}
          {data.query.results.channel.location.region},{" "}
          {data.query.results.channel.location.country} as of{" "}
          {data.query.results.channel.item.condition.date}
        </h1>
        <h2>
          <ThermostatIcon />
          {data.query.results.channel.item.condition.temp}
          <span>&#176;</span>
          {data.query.results.channel.units.temperature} <br></br>
          <AirIcon />
          {data.query.results.channel.item.condition.text}{" "}
        </h2>
      </div>
      <div className="cond">
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">
                <ThermostatIcon />
                <b>High </b>
              </th>
              <td>
                {data.query.results.channel.item.forecast[0].high}
                {""}
                <span>&#176;</span>
                {data.query.results.channel.units.temperature}{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <ThermostatIcon />
                <b>Low</b>
              </th>
              <td>
                {" "}
                {data.query.results.channel.item.forecast[0].low}
                {""}
                <span>&#176;</span>
                {data.query.results.channel.units.temperature}{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <OpacityIcon />
                <b>Humidity</b>
              </th>
              <td>
                {data.query.results.channel.atmosphere.humidity}
                {" % "}{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">
                <CompressIcon />
                <b>Pressure </b>
              </th>
              <td>
                {data.query.results.channel.atmosphere.pressure}{" "}
                {data.query.results.channel.units.pressure}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <LightModeIcon /> / <WbTwilightIcon />
              </th>
              <td>
                {data.query.results.channel.astronomy.sunrise}
                {" / "}
                {data.query.results.channel.astronomy.sunset}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <VisibilityIcon />
                <b> Visibility</b>
              </th>
              <td>{data.query.results.channel.atmosphere.visibility} % </td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">
                <WindPowerIcon />
                <b>Wind speed </b>
              </th>
              <td>
                {data.query.results.channel.wind.speed}{" "}
                {data.query.results.channel.units.speed}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <NearMeIcon />
                <b>Wind Direction </b>
              </th>
              <td>
                {data.query.results.channel.wind.direction}
                <span>&#176;</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <AcUnitIcon />
                <b>Chill</b>
              </th>
              <td>
                {data.query.results.channel.wind.chill}
                <span>&#176;</span>
                {data.query.results.channel.units.temperature}{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
