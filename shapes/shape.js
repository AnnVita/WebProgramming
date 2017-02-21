/**
 * Created by annvita on 21.02.17.
 */
var point = {
    x : 0,
    y : 0
};

var CShape = function () {
    this._fillColor = "#00001F";
    this._borderColor = "#FFF000";
    this._borderWidth = 10;
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
    this.draw = function(target) {};
    this.calculateArea = function() {};
    this.calculatePerimeter = function() {};
};
