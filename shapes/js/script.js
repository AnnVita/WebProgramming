/**
 * Created by annvita on 15.02.17.
 */
var g_shape;
var g_clickIteration = 0;

function start()
{
    var shapeSelect = document.getElementById('shape-select');

    shapeSelect.onchange = function () {
        g_clickIteration = 0;
        handleShapeChange(shapeSelect.value);
    };

    setMenuOnchangeEvents();
    setCanvasOnclickEvent();
}

function setCanvasOnclickEvent()
{
    var canvas = document.getElementById('canvas');

    canvas.addEventListener('click', onClick, false);
}

function onClick(e) {
    var cell = getCursorPosition(e);
    if (g_shape.prototype.getShapeType() === 'rectangle')
    {
        if (g_clickIteration == 0)
        {
            g_shape.setPosition(cell);
            redraw();
            ++g_clickIteration;
        }
        else
        {
            g_shape.setSize(cell.x - g_shape.getPosition().x, cell.y - g_shape.getPosition().y);
            redraw();
            g_clickIteration = 0;
        }
    }
    if (g_shape.prototype.getShapeType() === 'triangle')
    {
        if (g_clickIteration < 0 || g_clickIteration > 2)
        {
            g_clickIteration = 0;
        }
        g_shape.setVertex(g_clickIteration, cell);
        redraw();
        ++g_clickIteration;
    }
    if (g_shape.prototype.getShapeType() === 'circle')
    {
        if (g_clickIteration == 0)
        {
            g_shape.setCenter(cell);
            redraw();
            ++g_clickIteration;
        }
        else
        {
            g_shape.setRadius(getLineLength(g_shape.getCenter(), cell));
            redraw();
            g_clickIteration = 0;
        }
    }
    refreshShapeInfo();
}

function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX && e.pageY)
    {
        x = e.pageX;
        y = e.pageY;
    }
    else
    {
        x = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    var offset = document.getElementById('canvas').getBoundingClientRect();
    return new Point(x - offset.left, y - offset.top);
}

function handleShapeChange(shapeType)
{
    var rectangleMenu = document.getElementById('rectangle-parameters');
    var triangleMenu = document.getElementById('triangle-parameters');
    var circleMenu = document.getElementById('circle-parameters');

    if (shapeType === 'rectangle')
    {
        g_shape = new CRectangle();
        redraw();
        hideElements([triangleMenu, circleMenu]);
        showElements([rectangleMenu]);
    }
    else if (shapeType === 'triangle')
    {
        g_shape = new CTriangle();
        redraw();
        hideElements([rectangleMenu, circleMenu]);
        showElements([triangleMenu]);
    }
    else if (shapeType === 'circle')
    {
        g_shape = new CCircle();
        redraw();
        hideElements([triangleMenu, rectangleMenu]);
        showElements([circleMenu]);
    }
    refreshShapeInfo();
}

function refreshShapeInfo()
{
    document.getElementById('shape-info').innerHTML = g_shape.getType() + '<br /> area:' + g_shape.calculateArea() + ' perimeter:' + g_shape.calculatePerimeter();
}

function setMenuOnchangeEvents()
{
    setColorOnchangeEvents();
    setRectangleOnchangeEvents();
    setTriangleOnchangeEvents();
    setCircleOnchangeEvents();
}

function setColorOnchangeEvents()
{
    var colorMenu = {
        'fillColor' : document.getElementById('fill-color'),
        'borderColor' : document.getElementById('border-color')
    };

    colorMenu['fillColor'].onchange = function() {
        g_shape.prototype.setFillColor(colorMenu['fillColor'].value);
        redraw();
    };
    colorMenu['borderColor'].onchange = function() {
        g_shape.prototype.setBorderColor(colorMenu['borderColor'].value);
        redraw();
    };
}

function setRectangleOnchangeEvents()
{
    var rectangleParameters = {
        'x' : document.getElementById('rectangle-x'),
        'y' : document.getElementById('rectangle-y'),
        'width' : document.getElementById('rectangle-width'),
        'height' : document.getElementById('rectangle-height')
    };

    rectangleParameters['x'].onchange = function(){
        g_shape.setPosition(new Point(rectangleParameters['x'].value, rectangleParameters['y'].value));
        redraw();
        refreshShapeInfo();
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
        refreshShapeInfo();
    };
    rectangleParameters['height'].onchange = rectangleParameters['width'].onchange;
}

function setTriangleOnchangeEvents()
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
        g_shape.setVertex(0, new Point(triangleParameters['first-x'].value, triangleParameters['first-y'].value));
        redraw();
        refreshShapeInfo();
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
        refreshShapeInfo();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
        refreshShapeInfo();
    };
    triangleParameters['third-y'].onchange = triangleParameters['third-x'].onchange;
}

function setCircleOnchangeEvents()
{
    var circleParameters = {
        'circle-x' : document.getElementById('circle-x'),
        'circle-y' : document.getElementById('circle-y'),
        'circle-radius' : document.getElementById('circle-radius')
    };

    circleParameters['circle-x'].onchange = function () {
        g_shape.setCenter(new Point(circleParameters['circle-x'].value, circleParameters['circle-y'].value));
        redraw();
        refreshShapeInfo();
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
        refreshShapeInfo();
    };
}

function redraw()
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    g_shape.draw(context);
}

function hideElements(elements)
{
    for (var i = 0; i < elements.length; ++i)
    {
        elements[i].style.display = 'none';
    }
}

function showElements(elements)
{
    for (var i = 0; i < elements.length; ++i)
    {
        elements[i].style.display = 'block';
    }
}
