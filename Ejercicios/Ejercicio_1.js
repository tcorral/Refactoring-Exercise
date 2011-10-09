//Esta clase necesita soportar más formas.
//Refactorizar la clase.

var Shape = function(nShapeType, nSize)
{
	this.nShapeType = nShapeType;
	this.nSize = nSize;
};
Shape.SQUARE = 1;
Shape.CIRCLE = 2;
Shape.prototype.area = function()
{
	switch(this.nShapeType)
	{
		case Shape.SQUARE:
			return this.nSize * this.nSize;
		case Shape.CIRCLE:
			return Math.PI * this.nSize * this.nSize / 4;
		default:
			return 0;
	}
};
