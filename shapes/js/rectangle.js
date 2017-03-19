/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'rectangle';
    this._position = new Point(20, 20);
    this._size = new Point(200, 100);
    this.getType = function ()
    {
        return this.prototype._shapeType;
    }
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
        return (this._size.x*2 + this._size.y*2).toFixed(2);
    };
    this.calculateArea = function()
    {
        return (this._size.x*this._size.y).toFixed(2);
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