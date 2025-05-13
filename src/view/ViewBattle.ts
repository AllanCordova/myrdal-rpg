import Battle from "../model/Battle";
import ViewConsole from "./ViewConsole";
import chalk from "chalk";

export default class ViewBattle {
  constructor(private _battle: Battle, private _viewConsole: ViewConsole) {}

  public showVictory(): void {
    console.clear();
    this._viewConsole.showBorder();
    console.log(
      chalk.bgGreen.black.bold(
        `\n✨ Vitória Gloriosa! ${this._battle._player.name} derrotou todos os inimigos e salvou o reino! ✨\n`
      )
    );
    this._viewConsole.showBorder();
  }

  public showPlayerWin(): void {
    this._viewConsole.showBorder();
    console.log(
      chalk.greenBright(
        `🏅 ${this._battle._player.name} triunfou sobre o inimigo! A justiça prevaleceu!`
      )
    );
    this._viewConsole.showBorder();
    this._viewConsole.nextRound();
  }

  public showEnemyWin(): void {
    this._viewConsole.showBorder();
    console.log(
      chalk.redBright(
        `☠️ ${this._battle._enemy.name} venceu essa batalha... Mas a guerra ainda não acabou!`
      )
    );
    this._viewConsole.showBorder();
    this._viewConsole.nextRound();
  }

  public showDefeated(): void {
    console.clear();
    this._viewConsole.showBorder();
    console.log(
      chalk.redBright.bold(
        `😔 ${this._battle._player.name} foi derrotado... Mas os heróis sempre têm uma segunda chance!`
      )
    );
    this._viewConsole.showBorder();
  }

  public showFighters(): void {
    const title = chalk.cyanBright.bold("⚔️ Início do Combate ⚔️");
    const names: string = `${this._viewConsole.alignText(
      `${chalk.bgBlue(this._battle._player.name)}`,
      50
    )} ${chalk.red(this._battle._enemy.name)}`;
    const art = this._viewConsole.showArt();
    const battleStatus = `${chalk.green(
      `${this._battle._player.getStatus()}, hp: ${this.generateHpBar(
        this._battle._player.hp,
        this._battle._player.maxHp,
        8
      )}`
    )}\n\n${chalk.red(
      `${this._battle._enemy.getStatus()}, hp: ${this.generateHpBar(
        this._battle._enemy.hp,
        this._battle._enemy.maxHp,
        8
      )}`
    )}`;

    console.clear();
    this._viewConsole.showBorder();
    console.log(title.padStart(45, " "));
    console.log(names);
    console.log(art);
    this._viewConsole.showBorder();
    console.log(battleStatus);
    this._viewConsole.showBorder();
  }

  private generateHpBar(current: number, max: number, barLength = 10): string {
    const filledLength = Math.round((current / max) * barLength);
    const emptyLength = Math.max(barLength - filledLength, 0);

    const filledBar = "█".repeat(filledLength);
    const emptyBar = "░".repeat(emptyLength);

    return `HP: ${current}/${max}${filledBar}${emptyBar}`;
  }

  public showDamagePlayer(): void {
    console.clear();
    console.log(
      `${chalk.greenBright(
        this._battle._player.name
      )} desferiu um golpe heroico causando ` +
        chalk.redBright.bold(`${this._battle.getPlayerDamage()} de dano`) +
        ` em ${chalk.yellowBright(this._battle._enemy.name)}! 💥`
    );
  }

  public showDamageEnemy(): void {
    console.log(
      `${chalk.yellowBright(
        this._battle._enemy.name
      )} lançou um contra-ataque brutal causando ` +
        chalk.redBright.bold(`${this._battle.getEnemyDamage()} de dano`) +
        ` em ${chalk.greenBright(this._battle._player.name)}! 😱`
    );
  }

  public defenseEnemy(): void {
    console.log(
      `${chalk.yellow(
        this._battle._enemy.name
      )} levantou seu escudo! Defesa atual: ` +
        chalk.cyanBright(`${this._battle._enemy.defense} 🛡️`)
    );
  }

  public defensePlayer(): void {
    console.log(
      `${chalk.green(
        this._battle._player.name
      )} resiste bravamente! Defesa atual: ` +
        chalk.cyanBright(`${this._battle._player.defense} 🛡️`)
    );
  }

  public showDefendPlayer(): void {
    console.log(
      `${chalk.green(
        this._battle._player.name
      )} entrou em posição defensiva. Defesa elevada para ` +
        chalk.cyan(`${this._battle.playerDefend} 🛡️`)
    );
  }

  public showDefendEnemy(): void {
    console.log(
      `${chalk.yellow(
        this._battle._enemy.name
      )} recuou e protegeu-se. Defesa aumentada para ` +
        chalk.cyan(`${this._battle.enemyDefend} 🛡️`)
    );
  }

  public battleStatus(): void {
    this._viewConsole.showBorder();
    console.log(`\n${chalk.magentaBright.bold("📊 Status da Batalha")}\n`);

    const player = this._battle._player;
    const enemy = this._battle._enemy;

    const playerBox = `
╔════════════════════════════════════════════╗
║ ${chalk.bold(this._viewConsole.alignText("🧙 Jogador", 43))}║
║ Nome:   ${chalk.green(this._viewConsole.alignText(player.name, 35))}║
║ Classe: ${chalk.green(this._viewConsole.alignText(player.classType, 35))}║
║ HP:     ${chalk.green(
      this._viewConsole.alignText(
        this.generateHpBar(this._battle._player.hp, this._battle._player.maxHp),
        35
      )
    )}║
║ DEF:    ${chalk.green(
      this._viewConsole.alignText(player.defense.toString(), 35)
    )}║
╚════════════════════════════════════════════╝`;

    const enemyBox = `
╔════════════════════════════════════════════╗
║ ${chalk.bold(this._viewConsole.alignText("👹 Inimigo", 43))}║
║ Nome:   ${chalk.red(this._viewConsole.alignText(enemy.name, 35))}║
║ Classe: ${chalk.red(this._viewConsole.alignText(enemy.classType, 35))}║
║ HP:     ${chalk.red(
      this._viewConsole.alignText(
        this.generateHpBar(this._battle._enemy.hp, this._battle._enemy.maxHp),
        35
      )
    )}║
║ DEF:    ${chalk.red(
      this._viewConsole.alignText(enemy.defense.toString(), 35)
    )}║
╚════════════════════════════════════════════╝`;

    console.log(playerBox + "\n" + enemyBox);
    this._viewConsole.showBorder();
    this._viewConsole.isRight();
  }

  public dontUseSpecial(): void {
    console.log(
      chalk.red.bold(
        `🚫 Você ainda não pode usar sua habilidade especial! Espere o momento certo...`
      )
    );
  }
}
