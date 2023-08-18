import { useState } from "react";
import { title, latlng, imagesSrc } from "../Informations/KakaoMap_Information";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { Overlay } from "./Overlay_Component";

const KakaoMap = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [clickMarker, setClickMarker] = useState(0);

  const positions = [];

  for (let i = 0; i < latlng.length; i++) {
    const obj = {
      title: title[i],
      latlng: {
        lat: latlng[i].latitude,
        lng: latlng[i].longitude,
      },
      src: imagesSrc[i],
    };
    positions.push(obj);
  }
  console.log(positions);
  return (
    <Map
      center={{
        lat: 35.14238069524192,
        lng: 129.0349196282848,
      }}
      style={{
        width: "350px",
        height: "600px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
      level={4}
    >
      {positions.map((position, index) => (
        <MapMarker
          id={index}
          key={`${position.title}-${position.latlng}`}
          position={position.latlng}
          image={{
            src: position.src,
            size: {
              width: 15,
              height: 15,
            },
          }}
          title={position.title}
          onClick={() => {
            setIsOpen(true);
            setClickMarker(index);
          }}
        />
      ))}
      {isOpen && (
        <CustomOverlayMap position={positions[clickMarker].latlng}>
          <Overlay id={clickMarker} setIsOpen={setIsOpen} />
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export { KakaoMap };
