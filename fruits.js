status = "";

function preload() {
    img = loadImage = "banana.jpg";
}

function setup() {
    canvas = createCanvas();
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting object";
}

function modelLoaded() {
    status = true;
    console.log("model loaded");
}

function gotResults(error, results) {
    if (error) {
        console.log(error);

    } else {
        console.log(results);
        objects = results;
    }
}