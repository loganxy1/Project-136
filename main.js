status = "";

function setup(){
    canvas = createCanvas(550, 450);
    cnavas.position();

    video = createCapture(VIDEO);
    video.size(550, 450);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("text").value;
}

function modelLoaded(){
    console.log("Model has loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 550, 450);
}