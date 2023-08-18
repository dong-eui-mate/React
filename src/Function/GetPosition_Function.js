export function getPos(){
    let data;
    navigator.geolocation.getCurrentPosition((position)=>{
        const myPosition = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        data = JSON.stringify(myPosition);
        //console.log(myPosition);
    });
    return data;
}

// function accessToGeo(position){
//     let positionObj = []
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//     }
//     return positionObj;
//     //console.log(positionObj)
// }
// function askForLocate(){
//     navigator.geolocation.getCurrentPosition(accessToGeo)
// }

