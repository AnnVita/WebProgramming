/**
 * Created by annvita on 15.02.17.
 */
function start()
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var shape;
    var shapeSelect = document.getElementById('shape-select');

    var rectangleMenu = document.getElementById('rectangle-parameters');
    var triangleMenu = document.getElementById('triangle-parameters');
    var circleMenu = document.getElementById('circle-parameters');

    shapeSelect.onchange = function() {
        if (shapeSelect.value === 'rectangle')
        {
            shape = new CRectangle();
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
            triangleMenu.style.display = 'none';
            circleMenu.style.display = 'none';
            rectangleMenu.style.display = 'block';
        }
        else if (shapeSelect.value === 'triangle')
        {
            shape = new CTriangle();
            console.log(shape.calculateArea());
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
            rectangleMenu.style.display = 'none';
            circleMenu.style.display = 'none';
            triangleMenu.style.display = 'block';
        }
        else if (shapeSelect.value === 'circle')
        {
            shape = new CCircle();
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
            triangleMenu.style.display = 'none';
            rectangleMenu.style.display = 'none';
            circleMenu.style.display = 'block';
        }
    };
}