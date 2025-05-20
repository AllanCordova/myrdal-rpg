import Battle from "../src/model/Battle";
import Player from "../src/model/Player";
import Enemy from "../src/model/Enemy";

const hero: Player = new Player();
const vilon: Enemy = new Enemy();

hero.startMage("Auron");
vilon.startGoblin();

const battle: Battle = new Battle(hero, vilon);

while (battle.battleOver()) {
  battle.attackEnemy();
  if (vilon.isLive()) {
    battle.attackPlayer();
  }
}

describe("Teste para verficiar vencedor das Batalhas, no caso o objeto que esteja com a vida completa", () => {
  test("esperado e que o mago derote o Goblin", () => {
    expect(battle.getWinner()).toBe(hero);
  });
});

hero.startAngel("allan");
vilon.startVampire();

const playerDemange: number = Math.max(hero.attack - vilon.defense, 0);

describe("teste para verificar ocorrência de dano nas batalhas o dano e o atack - a defesa do inimigo, caso a defesa seja maior que o atack o dano e 0 por isso math max", () => {
  test("teste de dano", () => {
    expect(battle.getPlayerDamage()).toBe(playerDemange);
  });
});
