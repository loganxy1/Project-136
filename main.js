status = "";
object = [];

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(700, 500);

    video = createCapture(VIDEO);
    video.size(500, 400);
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
    objectDetector.detect(video, gotResults);
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function gotResults(){
    
}