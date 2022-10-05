import Current from "./Current.js";
import "./styles.css";
import data from "./weather.json";
import Forecast from "./forecast.js";
import { useState } from "react";

export default function App() {
  const i = 1;
  const d = data.query.results.channel.item.forecast[1].date;
  const e = data.query.results.channel.item.forecast[1].day;
  const hi = data.query.results.channel.item.forecast[1].high;
  const li = data.query.results.channel.item.forecast[1].low;
  const co = data.query.results.channel.item.forecast[1].text;
  const [file, setFile] = useState({
    idx: i,
    date: d,
    day: e,
    high: hi,
    low: li,
    text: co
  });
  function handleClick() {
    setFile((prevfile) => {
      return {
        date: data.query.results.channel.item.forecast[file.idx].date,
        day: data.query.results.channel.item.forecast[file.idx].day,
        high: data.query.results.channel.item.forecast[file.idx].high,
        low: data.query.results.channel.item.forecast[file.idx].low,
        text: data.query.results.channel.item.forecast[file.idx].text,
        idx: prevfile.idx + 1
      };
    });
  }
  function handleClick1() {
    setFile((prevfile) => {
      return {
        date: data.query.results.channel.item.forecast[file.idx].date,
        day: data.query.results.channel.item.forecast[file.idx].day,
        high: data.query.results.channel.item.forecast[file.idx].high,
        low: data.query.results.channel.item.forecast[file.idx].low,
        text: data.query.results.channel.item.forecast[file.idx].text,
        idx: prevfile.idx - 1
      };
    });
  }
  return (
    <div>
      <Current />
      <Forecast
        date={file.date}
        day={file.day}
        high={file.high}
        low={file.low}
        cond={file.text}
      />
      <div className="btns">
        <button className="btn btn-danger" onClick={handleClick1}>
          Previous Day{" "}
        </button>
        <button className="btn btn-dark" onClick={handleClick}>
          Next Day{" "}
        </button>
      </div>
    </div>
  );
}
