/**
 * Created by annvita on 15.02.17.
 */
var point = {
    x : 0,
    y : 0
};

function getSideLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}

function start()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    var shape = {
        _fillColor : "#00001F",
        _borderColor : "#FFF000",
        _borderWidth : 10,
        get fillColor()
        {
            return this._fillColor;
        },
        set fillColor(newValue)
        {
            this._fillColor = newValue;
        },
        get borderColor()
        {
            return this._borderColor;
        },
        set fillColor(newValue)
        {
            this._borderColor = newValue;
        },
        draw : function(target) {},
        calculateArea : function() {},
        calculatePerimeter : function() {}
    };

    var circle = {
        __proto__ : shape,
        _center : point,
        _radius : 20,

        draw: function (target)
        {
            target.beginPath();
            target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
            target.closePath();
            target.fillStyle = this._fillColor;
            target.strokeStyle = this._borderColor;
            target.fill();
            target.lineWidth = this._borderWidth;
            target.stroke();
        },

        calculateArea : function()
        {
            return this._radius * this._radius * Math.PI;
        },

        calculatePerimeter : function()
        {
            return 2 * this._radius * Math.PI;
        }
    };

    var triangle = {
        __proto__ : shape,
        _vertices : [point, point, point],
        draw: function (target)
        {
            target.beginPath();
            target.moveTo(this._vertices[0].x, this._vertices[0].y);
            target.lineTo(this._vertices[1].x, this._vertices[1].y);
            target.lineTo(this._vertices[2].x, this._vertices[2].y);
            target.closePath();
            target.fillStyle = this._fillColor;
            target.fill();
            target.strokeStyle = this._borderColor;
            target.lineWidth = this._borderWidth;
            target.stroke();
        },
        calculatePerimeter : function()
        {
            return getSideLength(this._vertices[0], this._vertices[1])
                 + getSideLength(this._vertices[1], this._vertices[2])
                 + getSideLength(this._vertices[0], this._vertices[2]);
        },
        calculateArea : function()
        {
            var halfPerimeter = this.calculatePerimeter() * 0.5;
            return Math.sqrt(halfPerimeter*(halfPerimeter - getSideLength(this._vertices[0], this._vertices[1]))*
                (halfPerimeter - getSideLength(this._vertices[1], this._vertices[2]))*
                (halfPerimeter - getSideLength(this._vertices[2], this._vertices[0]))
            );
        }
    };
    var rectangle = {
        __proto__: shape,
        _beginPoint : point,
        _size : point,
        draw: function (target)
        {
            target.beginPath();
            target.rect(this._beginPoint.x, this._beginPoint.y, this._size.x, this._size.y);
            target.closePath();
            target.fillStyle = this._fillColor;
            target.fill();
            target.strokeStyle = this._borderColor;
            target.lineWidth = this._borderWidth;
            target.stroke();
        },
        calculatePerimeter : function()
        {
            return this._size.x*2 + this._size.y*2;
        },
        calculateArea : function()
        {
            return this._size.x*this._size.y;
        }
    };

    triangle.draw(context);
    context.fillStyle = "#00001F";
    context.fillRect(0, 20, 30, 30);
}