/**
 * Created by annvita on 15.02.17.
 */
function start()
{
    var canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');

    var shape = class {
        constructor(){
            _fillColor = "#00001F";
            _borderColor = "#42E818";
        }
        set SetBorderColor(newValue)
        {
            this._borderColor = newValue;
        }
        get GetBorderColor()
        {
            return this._fillColor;
        }

        set SetFillColor(newValue)
        {
            this._fillColor = newValue;
        }
        get GetFillColor()
        {
            return this._fillColor;
        }
        draw(target){}
        calculateArea(){}
        calculatePerimeter(){}
    }
    context.fillStyle = "#00001F";
    context.fillRect(0, 20, 30, 30);
}