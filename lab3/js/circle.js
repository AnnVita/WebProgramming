/**
 * Created by annvita on 21.02.17.
 */
var CCircle = function () {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'circle';
    this._center = new Point(200, 200);
    this._radius = 100;
    this.getType = function ()
    {
        return this.prototype._shapeType;
    };
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
        return (this._radius * this._radius * Math.PI).toFixed(2);
    };
    this.calculatePerimeter = function()
    {
        return (2 * this._radius * Math.PI).toFixed(2);
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
