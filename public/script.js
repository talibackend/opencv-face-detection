let videoElement = document.getElementById("video-script");

let localStream;

navigator.mediaDevices.getUserMedia({ video : true }).then((stream)=>{
    localStream = stream;
    videoElement.srcObject = stream;
}).catch(err=>{ console.log(err) });
