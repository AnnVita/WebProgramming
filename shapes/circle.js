/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.__proto__ = CShape;
    this._center = point;
    this._radius = 20;
    this.draw = function (target)
    {
        target.beginPath();
        target.arc(this._center.x, this._center.y, this._radius, 0, Math.PI*2, false);
        target.closePath();
        target.fillStyle = this._fillColor;
        target.strokeStyle = this._borderColor;
        target.fill();
        target.lineWidth = this._borderWidth;
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
    }
    this.setCenter = function (point)
    {
        this._center = point;
    }
    this.getRadius = function ()
    {
        return this._radius;
    }
    this.setRadius = function (radius)
    {
        this._radius = radius;
    }
};
