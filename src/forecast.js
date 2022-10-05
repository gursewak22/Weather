import "./styles.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import data from "./weather.json";
export default function forecas(props) {
  return (
    <div className="container-fluid fcast ">
      <h1>
        Forecast for {props.day}, {props.date}
      </h1>
      <h1>{props.cond}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <th scope="row">
              <ThermostatIcon />
              <b>High </b>
            </th>
            <td>
              {props.high}
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
              {props.low}
              {""}
              <span>&#176;</span>
              {data.query.results.channel.units.temperature}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
