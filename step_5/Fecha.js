var Fecha = function(nDia, nMes, nAny)
{
	this.nDia = nDia;
	this.nMes = nMes;
	this.nAny = nAny;
};
Fecha.prototype.bisiesto = function()
{
	if((this.nAny % 400 === 0) || ((this.nAny % 4 === 0) && (this.nAny % 100 !== 0)))
	{
		return true;
	}
	return false;
};
Fecha.prototype.diasMes = function()
{
	var nDiasMes = 0;
	switch(this.nMes)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			nDiasMes = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			nDiasMes = 30;
			break;
		case 2:
			if(this.bisiesto())
			{
				nDiasMes = 29;
			}else
			{
				nDiasMes = 28;
			}
			break;
	}
	return nDiasMes;
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