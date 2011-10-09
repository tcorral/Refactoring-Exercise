//Esta clase necesita soportar más formas.
//Refactorizar la clase.

var Shape = function(nSize)
{
	this.nSize = nSize;
};
Shape.prototype.getSize = function()
{
	return this.nSize;
};

var Square = function(nSize)
{
	Shape.apply(this, arguments);
};
Square.prototype = new Shape();
Square.prototype.area = function()
{
	return this.nSize * this.nSize;
};

var Circle = function(nSize)
{
	Shape.apply(this, arguments);
};
Circle.prototype = new Shape();
Circle.prototype.area = function()
{
	return Math.PI * this.nSize * this.nSize / 4;
};
