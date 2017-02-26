/**
 * Created by annvita on 26.02.17.
 */
function getShapeType()
{
    return document.getElementById('shape-select').value;
}

function handleMenuItems()
{
    handleShapeMenu();
    var shapeType = getShapeType();
    if (shapeType === 'rectangle')
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
    else if (shapeType === 'triangle')
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
    else if (shapeType === 'circle')
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

function handleShapeMenu()
{
    var shapeMenu = {
        'fillColor' : document.getElementById('fill-color'),
        'borderColor' : document.getElementById('border-color')
    };

    shapeMenu['fillColor'].onchange = function() {
        shape.prototype.setFillColor(shapeMenu['fillColor'].value);
        context.clearRect(0, 0, canvas.width, canvas.height);
        shape.draw(context);
    };

    shapeMenu['borderColor'].onchange = function() {
        shape.prototype.setBorderColor(shapeMenu['borderColor'].value);
        context.clearRect(0, 0, canvas.width, canvas.height);
        shape.draw(context);
    };
}

function resetMenu()
{

}

function displayNewMenu()
{
    var shapeType = getShapeType();
    var rectangleMenu = document.getElementById('rectangle-parameters');
    var triangleMenu = document.getElementById('triangle-parameters');
    var circleMenu = document.getElementById('circle-parameters');

    if (shapeType === 'rectangle')
    {
        hideItems([triangleMenu, circleMenu]);
        rectangleMenu.style.display = 'block';
    }
    else if (shapeType === 'triangle')
    {
        hideItems([rectangleMenu, circleMenu]);
        triangleMenu.style.display = 'block';
    }
    else if (shapeType === 'circle')
    {
        hideItems([rectangleMenu, triangleMenu]);
        circleMenu.style.display = 'block';
    }
}

