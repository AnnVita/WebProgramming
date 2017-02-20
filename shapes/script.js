/**
 * Created by annvita on 15.02.17.
 */
function start()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    var point = {
        x : 0,
        y : 0
    };

    var shape = {
        _fillColor : "#00001F",
        _borderColor : "#FFF000",
        _borderWidth : 2,
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

        draw: function (target) {
            target.beginPath();
            target.fillStyle = this._fillColor;
            target.strokeStyle = this._borderColor;
            target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
            target.closePath();
            target.fill();
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

    circle.draw(context);
    context.fillStyle = "#00001F";
    context.fillRect(0, 20, 30, 30);
}