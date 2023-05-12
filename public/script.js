let videoElement = document.getElementById("video-script");

let localStream;

navigator.mediaDevices.getUserMedia({ video : true }).then((stream)=>{
    localStream = stream;
    videoElement.srcObject = stream;
    console.log(stream);
}).catch(err=>{ console.log(err) });

setTimeout(()=>{
    // localStream.onaddtrack((track)=>{ console.log(track) });
    // console.log(localStream.getVideoTracks());
}, 2000);
