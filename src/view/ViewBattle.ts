import Battle from "../model/Battle";
import ViewConsole from "./ViewConsole";
import chalk from "chalk";

export default class ViewBattle {
  constructor(private _battle: Battle, private _viewConsole: ViewConsole) {}

  public showVictory(): void {
    console.log(
      chalk.green(
        `🎉🎉🎉 parece que você acabou com todo mundo, parabéns ${this._battle._player.name}!! 🎉🎉`
      )
    );
  }

  public showPlayerWin(): void {
    this._viewConsole.showBorder();
    console.log(
      chalk.greenBright(
        `🎉 ${this._battle._player.name} venceu com honra (ou quase)! Parabéns, guerreiro! 🏆`
      )
    );
    this._viewConsole.showBorder();
    this._viewConsole.nextRound();
  }

  public showEnemyWin(): void {
    this._viewConsole.showBorder();
    console.log(
      chalk.redBright(
        `💀 ${this._battle._enemy.name} levou a melhor! Parece que o herói tropeçou na própria espada...`
      )
    );
    this._viewConsole.showBorder();
    this._viewConsole.nextRound();
  }

  public showDefeated(): void {
    console.clear();
    this._viewConsole.showBorder();
    console.log(
      chalk.red(
        `Gostei de você ${this._battle._player.name} foi bom enquanto durou!`
      )
    );
    this._viewConsole.showBorder();
  }

  public showFighters(): void {
    console.clear();
    this._viewConsole.showBorder();
    console.log(
      chalk.cyanBright.bold("Fighters") +
        "\n" +
        chalk.green(this._battle._player.getStatus()) +
        "\n" +
        chalk.red(this._battle._enemy.getStatus())
    );
    this._viewConsole.showBorder();
  }

  public showDamagePlayer(): void {
    console.log(
      `${chalk.greenBright(
        this._battle._player.name
      )} atacou com vontade e causou ` +
        chalk.redBright.bold(`${this._battle.getPlayerDamage()} de dano`) +
        ` em ${chalk.yellowBright(this._battle._enemy.name)}! `
    );
  }

  public showDamageEnemy(): void {
    console.log(
      `${chalk.yellowBright(
        this._battle._enemy.name
      )} revidou com tudo e causou ` +
        chalk.redBright.bold(`${this._battle.getEnemyDamage()} de dano`) +
        ` em ${chalk.greenBright(this._battle._player.name)}! `
    );
  }

  public defenseEnemy(): void {
    console.log(
      `Agora o escudo do coitado tá em ${chalk.cyanBright(
        this._battle._enemy.defense
      )} pontos. 🛡️`
    );
  }

  public defensePlayer(): void {
    console.log(
      `O escudo dele sobreviveu com ${chalk.cyanBright(
        this._battle._player.defense
      )} pontos. 🛡️`
    );
  }

  public showDefendPlayer(): void {
    console.log(
      `${chalk.green(
        this._battle._player.name
      )} se precaveu e aumentou sua defesa para ` +
        `${chalk.cyan(this._battle.playerDefend)} pontos! 🛡️`
    );
  }

  public showDefendEnemy(): void {
    console.log(
      `${chalk.yellow(
        this._battle._enemy.name
      )} entrou na defensiva, aumentando sua defesa para ` +
        `${chalk.cyan(this._battle.enemyDefend)} pontos! 🛡️`
    );
  }

  public battleStatus(): void {
    this._viewConsole.showBorder();
    console.log(`\n${chalk.magentaBright.bold("🛡️  Battle Status")}\n`);

    const player = this._battle._player;
    const enemy = this._battle._enemy;

    const playerBox = `
  ╔════════════════════════════════════════════╗
  ║ ${chalk.bold(this._viewConsole.alignText("Player", 43))}║
  ║ Name:   ${chalk.green(this._viewConsole.alignText(player.name, 35))}║
  ║ Class:  ${chalk.green(this._viewConsole.alignText(player.classType, 35))}║
  ║ HP:     ${chalk.green(
    this._viewConsole.alignText(player.hp.toString(), 35)
  )}║
  ║ DEF:    ${chalk.green(
    this._viewConsole.alignText(player.defense.toString(), 35)
  )}║
  ╚════════════════════════════════════════════╝`;

    const enemyBox = `
  ╔════════════════════════════════════════════╗
  ║ ${chalk.bold(this._viewConsole.alignText("Enemy", 43))}║
  ║ Name:   ${chalk.red(this._viewConsole.alignText(enemy.name, 35))}║
  ║ Class:  ${chalk.red(this._viewConsole.alignText(enemy.classType, 35))}║
  ║ HP:     ${chalk.red(this._viewConsole.alignText(enemy.hp.toString(), 35))}║
  ║ DEF:    ${chalk.red(
    this._viewConsole.alignText(enemy.defense.toString(), 35)
  )}║
  ╚════════════════════════════════════════════╝`;

    console.log(playerBox + "\n" + enemyBox);
    this._viewConsole.showBorder();
    this._viewConsole.isRight();
  }

  public dontUseSpecial(): void {
    console.log(chalk.red(`ainda não podemos usar isso!!`));
  }
}
