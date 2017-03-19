
/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};


/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculateArea = function()
    {
        return this._radius * this._radius * Math.PI;
    };
    this.calculatePerimeter = function()
    {
        return 2 * this._radius * Math.PI;
    };
    this.getCenter = function ()
    {
        return this._center;
    };
    this.setCenter = function (point)
    {
        if(!isNaN(point.x))
        {
            this._center.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._center.y = point.y;
        }
    };
    this.getRadius = function ()
    {
        return this._radius;
    };
    this.setRadius = function (radius)
    {
        if(!isNaN(radius))
        {
            this._radius = radius;
        }
    };
};

/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}
/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return this._size.x*2 + this._size.y*2;
    };
    this.calculateArea = function()
    {
        return this._size.x*this._size.y;
    };
    this.getPosition = function()
    {
        return this._position;
    };
    this.setPosition = function(point)
    {
        if(!isNaN(point.x))
        {
            this._position.x = point.x;
        }
        if(!isNaN(point.y))
        {
            this._position.y = point.y;
        }
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        if(!isNaN(width) && !isNaN(height))
        {
            this._size.x = width;
            this._size.y = height;
        }
    };
};
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

    var canvas = document.getElementById('canvas');

    canvas.addEventListener("click", onClick, false);
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
    return new Point(x, y);
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
    };
    rectangleParameters['y'].onchange = rectangleParameters['x'].onchange;
    rectangleParameters['width'].onchange = function() {
        g_shape.setSize(rectangleParameters['width'].value, rectangleParameters['height'].value);
        redraw();
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
    };
    triangleParameters['first-y'].onchange = triangleParameters['first-x'].onchange;

    triangleParameters['second-x'].onchange = function () {
        g_shape.setVertex(1, new Point(triangleParameters['second-x'].value, triangleParameters['second-y'].value));
        redraw();
    };
    triangleParameters['second-y'].onchange = triangleParameters['second-x'].onchange;

    triangleParameters['third-x'].onchange = function () {
        g_shape.setVertex(2, new Point(triangleParameters['third-x'].value, triangleParameters['third-y'].value));
        redraw();
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
    };
    circleParameters['circle-y'].onchange = circleParameters['circle-x'].onchange;
    circleParameters['circle-radius'].onchange = function () {
        g_shape.setRadius(circleParameters['circle-radius'].value);
        redraw();
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

/**
 * Created by annvita on 21.02.17.
 */
var Point = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

var CShape = function () {
    this._fillColor = '#00FF00';
    this._borderColor = '#0000FF';
    this._borderWidth = 4;
    this._shapeType = 'shape';
    this.getShapeType = function ()
    {
        return this._shapeType;
    };
    this.getFillColor = function ()
    {
        return this._fillColor;
    };
    this.setFillColor = function (newValue)
    {
        this._fillColor = newValue;
    };
    this.getBorderColor = function ()
    {
        return this._borderColor;
    };
    this.setBorderColor = function (newValue)
    {
        this._borderColor = newValue;
    };
    this.getBorderWidth = function ()
    {
        return this._borderWidth;
    };
    this.setBorderWidth = function (newValue)
    {
        if (!isNaN(newValue))
        {
            this._borderWidth = newValue;
        }
    };
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};


/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}