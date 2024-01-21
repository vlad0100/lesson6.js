/*function checkNum(){
    const inpt = document.getElementById("input");
    if (!inpt.checkValidity()){
        document.getElementById("success").innerHTML = inpt.validationMessage;

    }else{
        document.getElementById("success").innerHTML = "input ok";
    }
}*/
// const msg = document.getElementById("success");
// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         msg.innerHTML = "Location Error";
//     }
// }
// function showPosition(pos){
//     let position = "Latitude: " + pos.coords.latitude
//                     + "<br>longitude: " + pos.coords.longitude;
//     localStorage.setItem("pos", position);
// }
// localStorage.setItem("name", "Ion");
// document.getElementById("str").innerHTML = localStorage.getItem("pos");

// localStorage --- sessionStorage
// ramane let   --- dispare let dupa ce inchizi browserul

//Request -> server
//XmlHTTP

// fetch(url) //url = youtube, google......
//     .then(response => response.status)
//     .catch(error => {
//         console.log(error);
//     })

async function fetchText(){
    let response = await fetch('readme.txt');
    let data = response.text();
    console.log(data);
}