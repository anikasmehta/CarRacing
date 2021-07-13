canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var car1Width = 100;
var car1Height = 90;
var car1X = 10;
var car1Y = 10;
var car2Width = 100;
var car2Height = 90;
var car2X = 10;
var car2Y = 120;
var backgroundImage = "race.track.jpg";
var car2 = "car2.png";
var car1 = "car1.png";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;
    car1ImageTag = new Image();
    car1ImageTag.onload = uploadcar1;
    car1ImageTag.src = car1;
    car2ImageTag = new Image();
    car2ImageTag.onload = uploadcar2;
    car2ImageTag.src = car2;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
    console.log("car1")
    ctx.drawImage(car1ImageTag, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
    console.log("car2")
    ctx.drawImage(car2ImageTag, car2X, car2Y, car2Width, car2Height);
}
window.addEventListener("keydown", my_KeyDown);

function my_KeyDown(e) {
    keyDown = e.keyCode;
    console.log(keyDown);
    if (keyDown == '38') {
        console.log("up");
        up();
    }

    if (keyDown == '40') {
        console.log("down");
        down();
    }
    if (keyDown == '37') {
        console.log("left");
        left();
    }
    if (keyDown == '39') {
        console.log("right");
        right();
    }
    if (keyDown == '87') {
        console.log("w");
        w();
    }

    if (keyDown == '90') {
        console.log("z");
        z();

    }
    if (keyDown == '65') {
        console.log("a");
        a();

    }
    if (keyDown == '83') {
        console.log("s");
        s();

    }
}


function up() {
    if (car1Y >= 0) {
        car1Y = car1Y - 10
        console.log("When up arrow is pressed, x = " + car1X + " | y = " + car1Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function down() {
    if (car1Y <= 500) {
        car1Y = car1Y + 10
        console.log("When down arrow is pressed, x = " + car1X + " | y = " + car1Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function left() {
    if (car1X >= 0) {
        car1X = car1X - 10
        console.log("When left arrow is pressed, x = " + car1X + " | y = " + car1Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function right() {
    if (car1X <= 700) {
        car1X = car1X + 10
        console.log("When right arrow is pressed, x = " + car1X + " | y = " + car1Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function w() {
    if (car2Y >= 0) {
        car2Y = car2Y - 10
        console.log("When w is pressed, x = " + car2X + " | y = " + car2Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function z() {
    if (car2Y <= 500) {
        car2Y = car2Y + 10
        console.log("When z is pressed, x = " + car2X + " | y = " + car2Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function a() {
    if (car2X >= 0) {
        car2X = car2X - 10
        console.log("When a is pressed, x = " + car2X + " | y = " + car2Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function s() {
    if (car2X <= 700) {
        car2X = car2X + 10
        console.log("When s is pressed, x = " + car2 + " | y = " + car2Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}