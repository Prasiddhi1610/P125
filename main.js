function preload(){}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);
    video.position(100, 110);

    canvas = createCanvas(500, 500);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#Ace8f4');
    fill('#ff007b');
    text('Prasiddhi', noseX, noseY);
    textSize(difference);

    document.getElementById("text_size").innerHTML = "Size of Text = " + difference + "px";
}

noseX = 0;
noseY = 0;
difference = 0;
rightX = 0;
leftX = 0;

function modelLoaded(){
    console.log('PoseNet is Intialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        difference = floor(leftX - rightX);
        console.log("leftWristX = " + leftX + " rightWristX = " + rightX + " difference = " + difference);
    }
}