import { useEffect } from "react";
import {
  title,
  positions,
  imagesSrc,
} from "../Informations/KakaoMap_Information";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.14238069524192, 129.0349196282848),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    const mapTypeControl = new kakao.maps.MapTypeControl();

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const imageSize = new kakao.maps.Size(20, 20);
    const imageOption = { offset: new kakao.maps.Point(10, 10) };

    for (let i = 0; i < positions.length; i++) {
      if (i === 3) continue;
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        text: title[i],
        position: new kakao.maps.LatLng(
          positions[i].latitude,
          positions[i].longitude
        ), // 마커의 위치
        image: new kakao.maps.MarkerImage(imagesSrc[i], imageSize, imageOption),
      });
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "350px",
        height: "600px",
      }}
    ></div>
  );
};

export { KakaoMap };
