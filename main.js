var noseX = 0;
var noseY = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/KzwCXjJz/download-5.jpg');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
console.log("model has been inserted");
}
function gotposes(results){
    if(results.length>0){
    console.log(results);
  noseX = results[0].pose.nose.x - 5;
   noseY = results[0].pose.nose.y - 5;
  console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
    }
}
    function draw(){
        image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,50,50);
    }
function take_snapshot(){
    save("Singham.png");
}