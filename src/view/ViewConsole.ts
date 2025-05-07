import readLineSync from "readline-sync";
import ViewArt from "./ViewArt";

export default class ViewConsole {
  public constructor(private _viewArt: ViewArt) {}

  public showBorder(): void {
    console.log(`----------------------------------------`);
  }

  public isRight(): void {
    readLineSync.question(`podemos continuar mestre? ... `);
  }

  public nextRound(): void {
    readLineSync.question(`precione ...`);
  }

  public alignText(text: string, length: number): string {
    return text + " ".repeat(Math.max(0, length - text.length));
  }

  public showArt(): string {
    const player = this._viewArt.failArt();
    const enemy = this._viewArt.demonArt();

    const range: number = Math.max(player.length, enemy.length);
    let art: string = "";

    for (let i: number = 0; i < range; i++) {
      const linhaPlayer = (player[i] || "").padEnd(50, " ");
      const linhaEnemy = enemy[i] || "";
      art += `${linhaPlayer} ${linhaEnemy}\n`;
    }

    return art;
  }
}
