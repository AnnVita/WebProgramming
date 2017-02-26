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
    var colorMenu = {
        'fillColor' : document.getElementById('fill-color'),
        'borderColor' : document.getElementById('border-color')
    };

    colorMenu['fillColor'].onchange = function(){
        shape.prototype.setFillColor(colorMenu['fillColor'].value);
        context.clearRect(0, 0, canvas.width, canvas.height);
        shape.draw(context);
    };
    colorMenu['borderColor'].onchange = function(){
        shape.prototype.setBorderColor(colorMenu['borderColor'].value);
        context.clearRect(0, 0, canvas.width, canvas.height);
        shape.draw(context);
    };

    if (shapeSelect.value === 'rectangle')
    {
        var rectangleParameters = {
            'x' : document.getElementById('rectangle-x'),
            'y' : document.getElementById('rectangle-y'),
            'width' : document.getElementById('rectangle-width'),
            'height' : document.getElementById('rectangle-height')
        };
        rectangleParameters['x'].onchange = function(){
            shape.setPosition(new Point(rectangleParameters['x'].value, rectangleParameters['y'].value));
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
        rectangleParameters['width'].onchange = function() {
            shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        rectangleParameters['height'].onchange = rectangleParameters['width'].onchange;
    }
    else if (shapeSelect.value === 'triangle')
    {
        var triangleParameters = {
            'first-x' : document.getElementById('first-x'),
            'first-y' : document.getElementById('first-y'),
            'second-x' : document.getElementById('second-x'),
            'second-y' : document.getElementById('second-y'),
            'third-x' : document.getElementById('third-x'),
            'third-y' : document.getElementById('third-y')
        };

        triangleParameters['first-x'].onchange = function () {
            shape.setVertex(0, new Point(triangleParameters['first-x'].value, triangleParameters['first-y'].value));
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

        triangleParameters['second-x'].onchange = function () {
            shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

        triangleParameters['third-x'].onchange = function () {
            shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        triangleParameters['third-y'].onchange = triangleParameters['third-x'].onchange;
    }
    else if (shapeSelect.value === 'circle')
    {
        var circleParameters = {
            'circle-x' : document.getElementById('circle-x'),
            'circle-y' : document.getElementById('circle-y'),
            'circle-radius' : document.getElementById('circle-radius')
        };
        circleParameters['circle-x'].onchange = function () {
            shape.setCenter(new Point(circleParameters['circle-x'].value, circleParameters['circle-y'].value));
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
        circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
        circleParameters['circle-radius'].onchange = function () {
            shape.setRadius(circleParameters['circle-radius'].value);
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw(context);
        };
    }
}