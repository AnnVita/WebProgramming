/**
 * Created by annvita on 21.02.17.
 */
var CRectangle = function() {
    this.__proto__ = CShape;
    this._position = point;
    this._size = point;
    this.draw = function (target)
    {
        target.beginPath();
        target.rect(this._position.x, this._position.y, this._size.x, this._size.y);
        target.closePath();
        target.fillStyle = this._fillColor;
        target.fill();
        target.strokeStyle = this._borderColor;
        target.lineWidth = this._borderWidth;
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
    this.setPosition = function(position)
    {
        this._position = position;
    };
    this.getSize = function()
    {
        return this._size;
    };
    this.setSize = function(width, height)
    {
        this._size.x = width;
        this._size.y = height;
    };
};