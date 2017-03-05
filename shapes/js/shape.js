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

