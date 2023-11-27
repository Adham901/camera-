let options = {
    video: true,
};

let optionsClose ={
    video : false,
};

let video = document.querySelector('#video');
let btn =  document.querySelector('#open');
let btnClose = document.querySelector('#close');

btn.onclick = () =>{
    navigator.mediaDevices
    .getUserMedia(options)
    .then(getStream)
    .catch((e) => {console.log(e)});
};


let mediaStream;

btn.onclick = () => {
    if (mediaStream) {
        
        mediaStream.getTracks().forEach(track => track.stop());
        
        mediaStream = null;
    } else {
        navigator.mediaDevices
            .getUserMedia(options)
            .then(stream => {
                
                mediaStream = stream;
                 
                getStream(stream);
            })
            .catch((e) => { console.log(e) });
    }
};


// btnClose.onclick = () =>{
//     navigator.mediaDevices
//     .getUserMedia(optionsClose)
//     .then(getStream)
//     .catch((e) => {console.log(e)});
// };

function getStream(stream){
    console.log(video);
    video.srcObject = stream;
}