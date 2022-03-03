/* Future use */
Hooks.on('renderCombatCarousel', () => {
	let carouselSize = game.settings.get('combat-carousel', 'carouselSize')
	if (carouselSize !== "") {
		addClassByQuerySelector(carouselSize, "#combat-carousel")
	}
});
