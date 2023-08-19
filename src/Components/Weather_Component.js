import {
  FaCloud,
  FaDroplet,
  FaTemperatureQuarter,
  FaTemperatureThreeQuarters,
  FaWind,
} from "react-icons/fa6";
import styled from "styled-components";

const Weather = () => {
  const data = {
    region: "부산진구",
    weather: "흐림",
    icon: "url",
    temp: 29,
    temp_max: 31,
    temp_min: 25,
    humidity: 81,
    wind: 6,
  };

  return (
    <WeatherColumn>
      <WeatherTitle>
        <>{data.region}</>
        <FaCloud
          className="cloud"
          size={20}
          color="#95BEF7"
          style={{ transform: "scale(3)", margin: "10px 25px 0 0" }}
        />
      </WeatherTitle>
      <WeatherTemp>
        {data.temp}
        <StyledFont>°C</StyledFont>
      </WeatherTemp>
      <WeatherInfo>
        <InfoItem>
          <FaTemperatureThreeQuarters className="temp-max" size={20} />
          {data.temp_max}
          °C
        </InfoItem>
        <InfoItem>
          <FaTemperatureQuarter className="temp-min" size={20} />
          {data.temp_min}
          °C
        </InfoItem>
        <InfoItem>
          <FaDroplet className="humidity"> size={20}</FaDroplet>
          {data.humidity}%
        </InfoItem>
        <InfoItem>
          <FaWind className="wind" size={20} />
          {data.wind}㎧
        </InfoItem>
      </WeatherInfo>
    </WeatherColumn>
  );
};

const StyledFont = styled.span`
  font-size: 60px;
`;

const WeatherColumn = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
`;

const WeatherTitle = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const WeatherTemp = styled.div`
  font-size: 80px;
  color: #ff4a56;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export { Weather };
