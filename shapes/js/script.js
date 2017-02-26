/**
 * Created by annvita on 15.02.17.
 */
function hideItems(items)
{
    for (var i = 0; i < items.length; ++i)
    {
        items[i].style.display = 'none';
    }
}

function redraw(shape, canvas, context)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    shape.draw(context);
}



function start()
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var shape;
    var shapeSelect = document.getElementById('shape-select');

    shapeSelect.onchange = function() {
        displayNewMenu();
        if (shapeSelect.value === 'rectangle')
        {
            shape = new CRectangle();
            redraw(shape, canvas, context);
        }
        else if (shapeSelect.value === 'triangle')
        {
            shape = new CTriangle();
            redraw(shape, canvas, context);
        }
        else if (shapeSelect.value === 'circle')
        {
            shape = new CCircle();
            redraw(shape, canvas, context);
        }
    };

    handleMenuItems();
}