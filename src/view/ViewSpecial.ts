import Enemy from "../model/Emey";
import Player from "../model/Player";
import chalk from "chalk";
import ViewArt from "./ViewArt";

export default class ViewSpecial {
  public constructor(
    private player: Player,
    private enemy: Enemy,
    private _viewArt: ViewArt
  ) {}

  public dontUse(): void {
    console.log(
      chalk.red(`não podemos usar isso ainda... ${this.player.name}`)
    );
  }

  public showLifeAngel(): void {
    console.clear();
    console.log(chalk.cyanBright(`\n✨ O anjo invoca uma luz celestial...`));
    console.log(
      chalk.greenBright(
        `💖 Sua vida foi restaurada e aumentada para ${this.player.hp}!`
      )
    );
  }

  public showDefenseFighter(): void {
    console.clear();
    console.log(chalk.yellow(`\n🛡️ O guerreiro entra em posição defensiva...`));
    console.log(
      chalk.magentaBright(`🔒 Sua defesa vale ${this.player.defense}`)
    );
  }

  public showMageAttack(): void {
    console.clear();
    console.log(this._viewArt.mageArt());
    console.log();
    console.log(chalk.blueBright("\n✨ O ar se enche de energia arcana..."));
    console.log(
      chalk.magentaBright(
        `${this.player.name} ergue seu cajado e invoca uma ${chalk.bold(
          "TEMPESTADE ARCANA"
        )}! ⚡🔥`
      )
    );
    console.log(
      chalk.redBright(
        `${this.enemy.name} é atingido por relâmpagos mágicos e sofre dano devastador!`
      )
    );
  }

  public showCharge(charge: number): void {
    const maxCharge = 100;
    const percent = Math.min(charge, maxCharge);
    const bars = Math.floor((percent / maxCharge) * 20);
    const bar = "█".repeat(bars).padEnd(20, "░");

    console.log(
      chalk.green(`\n⚡ Carga Especial: [${chalk.magenta(bar)}] ${percent}%`)
    );

    if (percent >= maxCharge) {
      console.log(chalk.greenBright("🔥 Pronto para usar o ataque especial!"));
    } else {
      console.log(
        chalk.gray("⏳ Continue lutando para carregar seu ataque especial.")
      );
    }
  }
}
