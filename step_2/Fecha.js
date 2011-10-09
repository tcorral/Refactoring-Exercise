var Fecha = function(nDia, nMes, nAny)
{
	this.nDia = nDia;
	this.nMes = nMes;
	this.nAny = nAny;
};
Fecha.prototype.diasMes = function()
{
	return 0;
};
Fecha.prototype.valida = function()
{
	if(this.nDia < 1 || this.nDia > 31)
	{
		return false;
	}
	if(this.nMes < 1 || this.nMes > 12)
	{
		return false;
	}
	if(this.nDia > this.diasMes())
	{
		return false;
	}else
	{
		return true;
	}
};