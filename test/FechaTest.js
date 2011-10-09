function fechaSetUp()
{
	this.oFechaCorrecta = new Fecha(20, 6, 2008);
	this.oMesMal1 = new Fecha(21, 0, 3000);
	this.oMesMal2 = new Fecha(21, 13, 3000);
	this.oDiaMal1 = new Fecha(0, 11, 2000);
	this.oDiaMal2 = new Fecha(32, 11, 2000);
	this.oDiaMalNoviembre = new Fecha(31, 11, 2000);
	this.oDiaBienDiciembre = new Fecha(31, 12, 2000);
	this.oDiaMalFebrero = new Fecha(30, 2, 2008);
	this.oDiaBienFebreroBisiesto1 = new Fecha(29, 2, 2008);
	this.oDiaBienFebreroBisiesto2 = new Fecha(29, 2, 2000);
	this.oDiaMalFebreroBisiesto1 = new Fecha(29, 2, 2007);
	this.oDiaMalFebreroBisiesto2 = new Fecha(29, 2, 1900);
}
function fechaTearDown()
{

}
TestCase("FechaConstructorTest", sinon.testCase({
	setUp: fechaSetUp,
	"test should return 1 for day if we initialize Fecha with this arguments [1, 2, 2000]": function()
	{
		var oFecha = new Fecha(1, 2, 2000);

		assertEquals(1, oFecha.nDia);
	},
	"test should return 21 for day if we initialize Fecha with this arguments [21, 2, 2000]": function()
	{
		var oFecha = new Fecha(21, 2, 2000);

		assertEquals(21, oFecha.nDia);
	},
	"test should return 2 for month if we initialize Fecha with this arguments [1, 2, 2000]": function()
	{
		var oFecha = new Fecha(1, 2, 2000);

		assertEquals(2, oFecha.nMes);
	},
	"test should return 11 for month if we initialize Fecha with this arguments [1, 11, 2000]": function()
	{
		var oFecha = new Fecha(1, 11, 2000);

		assertEquals(11, oFecha.nMes);
	},
	"test should return 2000 for year if we initialize Fecha with this arguments [1, 2, 2000]": function()
	{
		var oFecha = new Fecha(1, 2, 2000);

		assertEquals(2000, oFecha.nAny);
	},
	"test should return 11 for year if we initialize Fecha with this arguments [1, 11, 2011]": function()
	{
		var oFecha = new Fecha(1, 11, 2011);

		assertEquals(2011, oFecha.nAny);
	},
	tearDown:fechaTearDown
}));

TestCase("FechaValidaTest", sinon.testCase({
	setUp: fechaSetUp,
	"test should return true if validate oFechaCorrecta": function()
	{
		assertTrue(this.oFechaCorrecta.valida());
	},
	"test should return false if validate oMesMal1": function()
	{
		assertFalse(this.oMesMal1.valida());
	},
	"test should return false if validate oMesMal2": function()
	{
		assertFalse(this.oMesMal2.valida());
	},
	"test should return false if validate oDiaMal1": function()
	{
		assertFalse(this.oDiaMal1.valida());
	},
	"test should return false if validate oDiaMal2": function()
	{
		assertFalse(this.oDiaMal2.valida());
	},
	"test should return false if validate oDiaMalNoviembre": function()
	{
		assertFalse(this.oDiaMalNoviembre.valida());
	},
	"test should return true if validate oDiaBienDiciembre": function()
	{
		assertTrue(this.oDiaBienDiciembre.valida());
	},
	"test should return false if validate oDiaMalFebrero": function()
	{
		assertFalse(this.oDiaMalFebrero.valida());
	},
	"test should return true if validate oDiaBienFebreroBisiesto1": function()
	{
		assertTrue(this.oDiaBienFebreroBisiesto1.valida());
	},
	"test should return true if validate oDiaBienFebreroBisiesto2": function()
	{
		assertTrue(this.oDiaBienFebreroBisiesto2.valida());
	},
	"test should return false if validate oDiaMalFebreroBisiesto1": function()
	{
		assertFalse(this.oDiaMalFebreroBisiesto1.valida());
	},
	"test should return false if validate oDiaMalFebreroBisiesto2": function()
	{
		assertFalse(this.oDiaMalFebreroBisiesto2.valida());
	},
	tearDown:fechaTearDown
}));