$(document).ready(function() {

    const loadImage= document.getElementById("LoadImage");
    const scaleElement= document.getElementById("ScaleElement");
    const ImgContent= document.getElementById("ImgContent");

    loadImage.addEventListener("click", (e) => {
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.loadFile("assets/euno.png");
    });
    
    function handleFileComplete(event) {
        ImgContent.appendChild(event.result);
    }

    var canvas = document.getElementById("testScaling"),
    stage = new createjs.Stage(canvas);

    function resize() {
        var w, h;
        var size = [1920, 1080];
        ratio = size[0] / size[1];
        if (window.innerWidth / window.innerHeight >= ratio) {
            w = window.innerHeight * ratio;
            h = window.innerHeight;
        } else {
            w = window.innerWidth;
            h = window.innerWidth / ratio;
        }
        
        stage.canvas.width = w;
        stage.canvas.height = h;
        stage.update();
    
        var scale = w/1920;
        stage.scaleX = stage.scaleY = scale;
    }

    scaleElement.addEventListener("click", (e) => {
        resize();
    });

});

