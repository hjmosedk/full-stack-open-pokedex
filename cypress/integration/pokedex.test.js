describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000');
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.',
    );
  });
  it('The system can proceed to next page', function () {
    cy.contains('ivysaur').click();
    cy.contains('Next').click();
    cy.contains('venusaur');
  });
});
