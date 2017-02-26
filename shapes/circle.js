/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
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
        if(!isNaN(point.x) && !isNaN(point.y))
        {
            this._center = point;
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
