/**
 * Created by annvita on 21.02.17.
 */
function getSideLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}

var CTriangle = function() {
    this.__proto__ = CShape;
    this._vertices = [point, point, point];
    this.draw = function (target)
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
    };
    this.calculatePerimeter = function()
    {
        return getSideLength(this._vertices[0], this._vertices[1])
            + getSideLength(this._vertices[1], this._vertices[2])
            + getSideLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getSideLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getSideLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getSideLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        this._vertices[vertexNumber] = point;
    };
};