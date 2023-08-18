import {
  FaCloud,
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
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNC44NyA3LjE5Ny04IDExLjY5OS04IDE2LjA3NSAwIDQuMzc4IDMuNTc5IDcuOTI1IDggNy45MjVzOC0zLjU0NyA4LTcuOTI1YzAtNC4zNzYtMy4xMy04Ljg3OC04LTE2LjA3NXptLS4wMjcgNS4xMmMuNDY3LjcyNSAxLjAyNyAxLjk4NyAxLjAyNyAzLjMyIDAgMy45MDgtNCA0LjU0OC00IDIuMTcgMC0xLjYzMyAxLjk4OC00LjA0NCAyLjk3My01LjQ5eiIvPjwvc3ZnPg==" />
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
