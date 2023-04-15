import { getPokemonContainer, getToolbar } from "../support/app.po";

describe('POKEDEX App', () => {
  beforeEach(() => cy.visit('/'));

  it('should have title \'pokedex\' in toolbar', () => {
    const title = 'pokedex'.toUpperCase();

    getToolbar().findByText(title).should('exist');
  });

  it('should not have \'go to first page\' button in toolbar', () => {
    getToolbar().contains('keyboard_double_arrow_left')
      .should('not.exist');
  });

  it('should have go to first page after next page click in toolbar', () => {
    getToolbar().contains('chevron_right').click();
    getToolbar().contains('keyboard_double_arrow_left')
      .should('exist');
  });

  it('should have inactive previous button in toolbar', () => {
    getToolbar().contains('chevron_left')
      .should('be.disabled');
  });

  it('should have active next button in toolbar', () => {
    getToolbar().contains('chevron_right')
      .should('be.enabled');
  });


  it('should load first 10 pokemon by default', () => {
    const pokemonNames = [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
      "squirtle",
      "wartortle",
      "blastoise",
      "caterpie"
    ];
    
    pokemonNames
      .map(name => name.toUpperCase())
      .forEach((pokemon) => {
        getPokemonContainer().findByText('Name: ' + pokemon).should('exist');
      })
  });
  
  it('should load 10 Pokemon of page 2', () => {
    getToolbar().contains('chevron_right').click();

    const pokemonNames = [
      "metapod",
      "butterfree",
      "weedle",
      "kakuna",
      "beedrill",
      "pidgey",
      "pidgeotto",
      "pidgeot",
      "rattata",
      "raticate"
    ];
    
    pokemonNames
      .map(name => name.toUpperCase())
      .forEach((pokemon) => {
        getPokemonContainer().findByText('Name: ' + pokemon).should('exist');
      })
  })

  it('should go to first page on double arror click', () => {
    getToolbar().contains('chevron_right').click();
    cy.wait(1000 * 2);
    getToolbar().contains('keyboard_double_arrow_left').click();
    
    getToolbar().contains('keyboard_double_arrow_left')
    .should('not.exist');
    cy.wait(1000 * 2);

    getPokemonContainer().findByText('Name: BULBASAUR').should('exist');
  })

});
