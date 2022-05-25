$(document).ready(function() {

    const loadImage= document.getElementById("LoadImage");
    const ImgContent= document.getElementById("ImgContent");

    loadImage.addEventListener("click", (e) => {
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.loadFile("assets/euno.png");
    });
    
    function handleFileComplete(event) {
        ImgContent.appendChild(event.result);
    }

    var canvas = document.getElementById("testCanvas"),
    stage = new createjs.Stage(canvas);

    var sb = new createjs.ScaleBitmap(image, 
    new createjs.Rectangle(12, 12, 5, 10));
    sb.setDrawSize(200, 100);
    stage.addChild(sb);

    stage.on("stagemousedown", function(e) {
    
    sb.setDrawSize(
        Math.random() * Math.min(600, canvas.width-200) + 100 | 0, // Random size
        Math.random() * Math.min(500, canvas.height-100) + 60 | 0
    );
    
    center();
        stage.update();
    });

    function center() {
    sb.x = canvas.width - sb.drawWidth >> 1;
    sb.y = canvas.height - sb.drawHeight >> 1;
    }

    function handleResize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stage.update();
    }
    
    window.addEventListener("resize", handleResize);

    handleResize();
    center();

});

