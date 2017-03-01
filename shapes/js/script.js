/**
 * Created by annvita on 15.02.17.
 */
function hideItems(items)
{
    for (var i = 0; i < items.length; ++i)
    {
        items[i].style.display = 'none';
    }
}

function redraw(shape, canvas, context)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    shape.draw(context);
}

function hideElements(elements)
{
    for (var i = 0; i < elements.length(); ++i)
    {
        elements[i].style.display = 'none';
    }
}

function showElements(elements)
{
    for (var i = 0; i < elements.length(); ++i)
    {
        elements[i].style.display = 'block';
    }
}

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
            redraw(shape, canvas, context);
            hideElements([triangleMenu, circleMenu]);
            showElements([rectangleMenu]);
        }
        else if (shapeSelect.value === 'triangle')
        {
            shape = new CTriangle();
            redraw(shape, canvas, context);
            hideElements([rectangleMenu, circleMenu]);
            showElements([triangleMenu]);
        }
        else if (shapeSelect.value === 'circle')
        {
            shape = new CCircle();
            redraw(shape, canvas, context);
            hideElements([triangleMenu, rectangleMenu]);
            showElements(circleMenu);
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

    var rectangleParameters = {
        'x' : document.getElementById('rectangle-x'),
        'y' : document.getElementById('rectangle-y'),
        'width' : document.getElementById('rectangle-width'),
        'height' : document.getElementById('rectangle-height')
    };
    rectangleParameters['x'].onchange = function(){
        shape.setPosition(new Point(rectangleParameters['x'].value, rectangleParameters['y'].value));
        redraw(shape, canvas, context);
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw(shape, canvas, context);
    };
    rectangleParameters['height'].onchange = rectangleParameters['width'].onchange;


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
        redraw(shape, canvas, context);
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw(shape, canvas, context);
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw(shape, canvas, context);
    };
    triangleParameters['third-y'].onchange = triangleParameters['third-x'].onchange;

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