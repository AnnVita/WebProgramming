/**
 * Created by annvita on 21.02.17.
 */
var CTriangle = function() {
    this.prototype = Object.create(new CShape());
    this.prototype._shapeType = 'triangle';
    this._vertices = [new Point(10, 10), new Point(400, 10), new Point(10, 300)];
    this.draw = function (target)
    {
        target.lineWidth = this.prototype.getBorderWidth();
        target.fillStyle = this.prototype.getFillColor();
        target.strokeStyle = this.prototype.getBorderColor();
        target.beginPath();
        target.moveTo(this._vertices[0].x, this._vertices[0].y);
        target.lineTo(this._vertices[1].x, this._vertices[1].y);
        target.lineTo(this._vertices[2].x, this._vertices[2].y);
        target.closePath();
        target.fill();
        target.stroke();
    };
    this.calculatePerimeter = function()
    {
        return getLineLength(this._vertices[0], this._vertices[1])
            + getLineLength(this._vertices[1], this._vertices[2])
            + getLineLength(this._vertices[0], this._vertices[2]);
    };
    this.calculateArea = function()
    {
        var halfPerimeter = this.calculatePerimeter() * 0.5;
        return Math.sqrt(halfPerimeter*(halfPerimeter - getLineLength(this._vertices[0], this._vertices[1]))*
            (halfPerimeter - getLineLength(this._vertices[1], this._vertices[2]))*
            (halfPerimeter - getLineLength(this._vertices[2], this._vertices[0]))
        );
    };
    this.getVertex = function(vertexNumber)
    {
        return this._vertices[vertexNumber];
    };
    this.setVertex = function(vertexNumber, point)
    {
        if (!isNaN(point.x) && !isNaN(point.y))
        {
            this._vertices[vertexNumber] = point;
        }
        else
        {
            console.log('bad triangle');
        }
    }
};

function getLineLength(firstPoint, secondPoint)
{
    return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}