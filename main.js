noseX = "";
noseY = "";
rightWristX = "";
leftWristX = "";
difference = "";


function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults);

}

function modelLoaded()
{
    console.log("initialased modal");
}

function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Y = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftwristX = "+leftWristX+" rightwristX = "+rightWristX);
    }
}

function draw()
{
    background("#f1f505");
    document.getElementById("font_size").innerHTML="Font Size Of The Text Will Be "+difference+" px";
    textSize(difference);
    fill("red");
    text("Prithu",noseX,noseY);
}

function preload()
{
   
}