const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Jugador: 0},
	{Sólido: 0},
	{FondoEnMosaico: 0},
	{Tomate: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Jugador: class extends self.ISpriteInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	Tomate: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}