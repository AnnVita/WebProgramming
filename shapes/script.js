/**
 * Created by annvita on 15.02.17.
 */
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("shape.js");
include("circle.js");
include("rectangle.js");
include("triangle.js");

function start()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    var shapeSelect = document.getElementById("shape-select");
    shapeSelect.onchange = function() {
        console.log(shapeSelect.value);
    };

    context.fillStyle = "#00001F";
    context.fillRect(0, 20, 30, 30);
}